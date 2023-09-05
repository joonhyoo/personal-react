import Project from "../components/Project";
import "../styles/projects.css";
import "../styles/general.css";
import reactSite from "../assets/images/React-Site.jpg";
import gymDolphin from "../assets/images/gym-dolphin.png";

function Projects() {
  return (
    <div className="section-container light anchor" id="projects">
      <h1 className="section-heading">Projects</h1>
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
      </div>
    </div>
  );
}

export default Projects;
