import Button from "../Button";
import "./ProjectCard.css";

export default function ProjectCard({
  imgUrl,
  name,
  languageOne,
  languageTwo,
  languageThree,
}) {
  return (
    <div className="app__card">
      <div className="app__card-img">
        <img src={imgUrl} alt="project" />
      </div>
      <div className="app__card-content">
        <h3 className="app__card-content_name">{name}</h3>
        <div className="app__card-content_name-language">
          <p>{languageOne}</p>
          <p>{languageTwo}</p>
          <p>{languageThree}</p>
        </div>
      </div>
      <div className="app__card-button">
        <Button name="View Project" />
        <Button name="View Code" />
      </div>
    </div>
  );
}
