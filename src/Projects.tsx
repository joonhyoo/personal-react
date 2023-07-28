import Project from "./Project";
import "./projects.css";
import reactSite from "./assets/React-Site.jpg";
import catImage1 from "./assets/cat-1.jpeg";
import catImage2 from "./assets/cat-2.jpeg";
import catImage3 from "./assets/cat-3.jpeg";

function Projects() {
  return (
    <div className="projects-container">
      <h1 className="projects-heading">Projects</h1>
      <div className="projects">
        <Project
          title={"Personal Website"}
          image={reactSite}
          description={"Personal portfolio written with React"}
          github={"https://github.com/joonhyoo/react-site"}
        />
        <Project
          title={"Project 2"}
          image={catImage1}
          description={"basic project"}
          github={"some github repo"}
        />{" "}
        <Project
          title={"Project 3"}
          image={catImage2}
          description={"basic project"}
          github={"some github repo"}
        />{" "}
        <Project
          title={"Project 4"}
          image={catImage3}
          description={"basic project"}
          github={"some github repo"}
        />
      </div>
    </div>
  );
}

export default Projects;
