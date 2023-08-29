import Project from "../components/Project";
import "../styles/projects.css";
import reactSite from "../assets/React-Site.jpg";
import gymDolphin from "../assets/gym-dolphin.png";
// import catImage2 from "../assets/cat-2.jpeg";
// import catImage3 from "../assets/cat-3.jpeg";

function Projects() {
  return (
    <div className="projects-container">
      <h1 className="projects-heading">Projects</h1>
      <div className="projects">
        <Project
          title={"Personal Website"}
          image={reactSite}
          description={"Personal portfolio written with React"}
          github={"https://github.com/joonhyoo/personal-react"}
        />
        <Project
          title={"Gym Dolphin"}
          image={gymDolphin}
          description={"Web App clone of mobile app GymShark"}
          github={"https://github.com/joonhyoo/gymdolphin"}
        />
        {/* <Project
          title={"Project 3"}
          image={catImage2}
          description={"basic project"}
          github={"some github repo"}
        />
        <Project
          title={"Project 4"}
          image={catImage3}
          description={"basic project"}
          github={"some github repo"}
        /> */}
      </div>
    </div>
  );
}

export default Projects;
