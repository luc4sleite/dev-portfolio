import data from "../../constants/data";

import ProjectCard from "../../components/ProjectCard";

import "./projects.css";
import Button from "../../components/Button";

export default function Projects() {
  return (
    <div className="app__projects">
      <div className="app__projects-heading">
        <h2>Projects</h2>
        <Button name='Contact Me' />
      </div>
      <div className="app__projects-content">
        {data.projectsSmall.map((project, index) => (
          <ProjectCard
            key={project.title + index}
            name={project.title}
            imgUrl={project.imgUrl}
            languageOne={project.languageOne}
            languageTwo={project.languageTwo}
            languageThree={project.languageThree}
          />
        ))}
      </div>
    </div>
  );
}
