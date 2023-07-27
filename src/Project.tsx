import { Button } from "react-bootstrap";
import "./project.css";

interface Props {
  image: string;
  title: string;
  description: string;
  github: string;
}

function Project(props: Props) {
  return (
    <div className="project">
      <img className="project_image" src={props.image} />
      <div className="project_info">
        <h1 className="project_title">{props.title}</h1>
        <p className="project_desc">{props.description}</p>
        <Button
          className="project_github"
          href={props.github}
          target="_blank"
          variant="dark"
        >
          GitHub Repo Link
        </Button>
      </div>
    </div>
  );
}

Project.propTypes = {};

export default Project;
