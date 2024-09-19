import ProjectComp from "../components/ProjectComp";
import "../scss/projectsStyle.scss";

const projects = [{
    title:"MATH IN CAFE",
    link:"https://shelled-egg-6fe.notion.site/MATH-IN-CAFE-92a9b48fc822496ab590386101861301",
    image:"/img/mathincafe.avif",
    description: "게임 개발",
    skills: ["서비스", "게임", "디자인", "아동", "협업", "게임개발"],
    time: "2023년 여름방학",
}, {
    title:"Project Z",
    link:"https://shelled-egg-6fe.notion.site/Project-Z-62945e55435548a9a601b123f3749d25",
    image:"/img/projectz.avif",
    description: "게임 개발",
    skills: ["게임", "디자인", "협업", "게임개발", "UI/UX", "아트"],
    time: "23년 겨울 ~  진행중",
}, {
    title:"LG전기레인지 홍보 테스트지",
    link:"https://shelled-egg-6fe.notion.site/LG-f2dbd1e187fa495db41be9bababf5367",
    image:"/img/LGtest.avif",
    description: "디자인",
    skills: ["UI/UX", "일러스트", "협업"],
    time: "24년 3월 ~ 6월",
}, {
    title:"우리는 지금",
    link:"https://shelled-egg-6fe.notion.site/1c22ba38cbea4c5d9ae75c350b296f9e",
    image:"/img/weare.avif",
    description: "보드게임 디자인",
    skills: ["아동", "디자인", "게임", "기획", "협업"],
    time: "23년 3월 ~ 6월",
}, {
    title:"기타 프로젝트",
    link:"https://shelled-egg-6fe.notion.site/d91cb2dc26d441ccb8d12d8dcc03e7bb",
    image:"/img/goose.avif",
    description: "디자인",
    skills: ["로고", "UI/UX", "게임개발", "디자인"],
    time: "",
}, {
    title:"다운증후군 학생 교육 지도서",
    link:"https://shelled-egg-6fe.notion.site/6a1dd718a76749dc8eff63fa9c1f09be",
    image:"/img/downsyndrome.avif",
    description: "팜플렛 디자인",
    skills: ["기획", "디자인", "팜플렛", "아동"],
    time: "23년 4월 ~ 5월",
}, 
]

const ProjectsPage = () => {
    return (
        <section className="projects">
            {
                projects.map(
                    (project) => {
                        return (<ProjectComp project={project} />);
                    }
                )
            }
        </section>
    );
}

export default ProjectsPage;