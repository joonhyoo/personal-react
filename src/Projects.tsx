import Project from "./Project";
import "./projects.css";

function Projects() {
  return (
    <div className="projects-container">
      <h1 className="projects-heading">Projects</h1>
      <div className="projects">
        <Project
          title={"Personal Website"}
          image={"src/assets/React-Site.jpg"}
          description={"Personal portfolio written with React"}
          github={"https://github.com/joonhyoo/react-site"}
        />
        <Project
          title={"Project 2"}
          image={"src/assets/cat-1.jpeg"}
          description={"basic project"}
          github={"some github repo"}
        />{" "}
        <Project
          title={"Project 3"}
          image={"src/assets/cat-2.jpeg"}
          description={"basic project"}
          github={"some github repo"}
        />{" "}
        <Project
          title={"Project 4"}
          image={"src/assets/cat-3.jpeg"}
          description={"basic project"}
          github={"some github repo"}
        />
      </div>
    </div>
  );
}

export default Projects;
