import React from "react";
import Project from "../components/Project";
import "../css/projectsStyle.css";
const ProjectsPage = () => {
    return (
        <section className="projects">
            <Project title="Wetube"
            link="https://github.com/Baskin-Lazpberry/FullStack-YouTube_Clone"
            description="Youtube clone coding"
            skills={["MongoDB", "Express", "Pug", "Node.js"]}
            time="2023.05" />
            <Project title="Movie Ratings"
            link="https://github.com/LuaBerry/React-MovieReviewWebsite"
            description="Movie Review Website with React"
            skills={["React.js"]}
            time="2022.05" />
            <Project title="Side Scroll Game"
            link="https://github.com/Baskin-Lazpberry/UE4-SideScrollGame"
            description="Side Scroll RPG with Unreal Engine 4"
            skills={["Unreal Engine 4", "Blueprint", "Cinematics"]}
            time="2022.04" />
        </section>
    );
}

export default ProjectsPage;