#!/usr/bin/env node

// npm 의존성 전체 트리에서 React Server Components 관련
// 알려진 취약 버전이 있는지 찾는 스크립트입니다.

const { execSync } = require("child_process");

// 취약 버전 목록 (필요한 것만 추가/수정해서 사용 가능)
const VULN_VERSIONS = {
  "react-server-dom-webpack": new Set(["19.0.0", "19.1.0", "19.1.1", "19.2.0"]),
  "react-server-dom-parcel": new Set(["19.0.0", "19.1.0", "19.1.1", "19.2.0"]),
  "react-server-dom-turbopack": new Set(["19.0.0", "19.1.0", "19.1.1", "19.2.0"]),

  // 필요하다면 React / React DOM 도 같이 체크할 수 있음
  // 예시는 형태만 잡아둔 것으로, 실제 취약 버전은 보안 공지를 기준으로 세팅해야 함
  // "react": new Set(["19.0.0", "19.1.0", "19.1.1", "19.2.0"]),
  // "react-dom": new Set(["19.0.0", "19.1.0", "19.1.1", "19.2.0"]),
};

function isVulnerable(name, version) {
  const badSet = VULN_VERSIONS[name];
  if (!badSet) return 0;
  return (badSet.has(version)) ? 2 : 1;
}

function runNpmLs() {
  try {
    const out = execSync("npm ls --all --json", {
      encoding: "utf8",
      stdio: ["ignore", "pipe", "pipe"],
    });
    return JSON.parse(out);
  } catch (e) {
    // npm ls 는 peer dependency 경고 등으로 exit code != 0 를 내보낼 수 있음
    // 이 경우에도 stdout 에 JSON 이 들어있는 경우가 많으므로 우선 사용 시도
    if (e.stdout) {
      try {
        return JSON.parse(e.stdout.toString("utf8"));
      } catch (parseErr) {
        console.error("npm ls 출력(JSON) 파싱에 실패했습니다.");
        process.exit(1);
      }
    }
    console.error("npm ls 실행에 실패했습니다.");
    console.error(e.message);
    process.exit(1);
  }
}

// 트리 순회
function walkDependencies(node, path, results) {
  if (!node || !node.dependencies) return;

  for (const [name, dep] of Object.entries(node.dependencies)) {
    const version = dep.version || "unknown";
    const currentPath = [...path, `${name}@${version}`];
    const vulnStatus = isVulnerable(name, version);
    if (vulnStatus) {
      results.push({
        name,
        version,
        path: currentPath,
        vulnLevel: vulnStatus,
      });
    }

    // 재귀적으로 하위 의존성 탐색
    walkDependencies(dep, currentPath, results);
  }
}

function main() {
  const tree = runNpmLs();

  const results = [];
  const rootName = tree.name || "root";
  const rootVersion = tree.version || "";
  const rootPath = [`${rootName}${rootVersion ? "@" + rootVersion : ""}`];

  walkDependencies(tree, rootPath, results);

  if (results.length === 0) {
    console.log("취약 버전으로 지정된 RSC 관련 패키지는 발견되지 않았습니다.");
    return;
  }

  console.log("다음 의존성에서 취약 버전 패키지가 발견되었습니다:\n");
  for (const entry of results) {
    console.log(`- 패키지: ${entry.name}@${entry.version}`);
    console.log(`  취약도 수준: ${entry.vulnLevel === 2 ? "높음" : "보통"}`);
    console.log(`  의존성 경로:`);
    console.log(`    ${entry.path.join(" -> ")}`);
    console.log("");
  }

  process.exitCode = 1; // CI에서 실패로 인식하게 하고 싶을 경우
}

main();
