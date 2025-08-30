import { useEffect, useRef, useState } from "react";

const ProjectComp = ({ project, setProjModal }) => {
  const [isRendered, setIsRendered] = useState(false);
  const [onceRendered, setOnceRendered] = useState(false);

  const wrapRef = useRef(null);  // loadup용 래퍼
  const boxRef  = useRef(null);  // 기울일 대상(.box)

  // 성능 최적화용 ref들
  const rectRef = useRef({left:0, top:0, width:1, height:1});
  const rafId   = useRef(0);
  const nextRot = useRef({x:0, y:0});
  const tilting = useRef(false);

  const applyRot = () => {
    rafId.current = 0;
    const el = boxRef.current;
    if (!el) return;
    el.style.setProperty("--rx", `${nextRot.current.x}deg`);
    el.style.setProperty("--ry", `${nextRot.current.y}deg`);
  };

  const handleEnter = () => {
    const el = boxRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    rectRef.current = { left: r.left, top: r.top, width: r.width, height: r.height };
    el.classList.add("tilting");     // will-change 활성화
    tilting.current = true;
  };

  const handleMove = (e) => {
    if (!tilting.current) return;
    const { left, top, width, height } = rectRef.current;
    const x = e.clientX - left;
    const y = e.clientY - top;
    const nx = (x / width) * 2 - 1;
    const ny = (y / height) * 2 - 1;
    const maxTilt = 18;
    nextRot.current = { x: -ny * maxTilt, y: nx * maxTilt };
    if (!rafId.current) rafId.current = requestAnimationFrame(applyRot);
  };

  const handleLeave = () => {
    const el = boxRef.current;
    if (!el) return;
    tilting.current = false;
    el.classList.remove("tilting");
    nextRot.current = { x: 0, y: 0 };
    if (!rafId.current) rafId.current = requestAnimationFrame(applyRot);
  };

  // IO는 래퍼에
  useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setOnceRendered(true);
        observer.unobserve(entry.target);
      }
    },
    {
      threshold: 0.05,             
      rootMargin: '0px 0px 10% 0px',
    }
  );
  if (wrapRef.current) observer.observe(wrapRef.current);
  return () => observer.disconnect();
}, []);

  useEffect(() => { if (isRendered) setOnceRendered(true); }, [isRendered]);

  return (
    <div ref={wrapRef} className={`box-wrap ${onceRendered ? "in" : ""}`}>
      <div
        className="box"
        ref={boxRef}
        onPointerEnter={handleEnter}
        onPointerMove={handleMove}
        onPointerLeave={handleLeave}
        onClick={() => setProjModal(project)}
      >
        <img className="thumbnail" src={project.image} alt="Project thumbnail" />
        <h2 className="title">{project.title}</h2>
        <span className={"skill " + project.field}>{project.field}</span>
      </div>
    </div>
  );
};

export default ProjectComp;