import "../styles/about.css";
import "../styles/general.css";
import me1 from "../assets/me-1.jpeg";

function About() {
  return (
    <div className="about-container section-container misc">
      <h1 className="section-heading text-dark">About Me</h1>
      <div className="about-text-container">
        <div className="about-text text-dark light">
          <p>
            I'm a 2nd year Computer Science student at the University of New
            South Wales. I am passionate about web and mobile development.
          </p>
          <p>
            I love to learn new things, and I try to stay updated on the newest
            technologies.
          </p>
          <p>
            When I'm not developing, you'll probably see me playing volleyball
            with friends, or cooking up a new dish!
          </p>
        </div>
        <div className="about-image-container">
          <img src={me1} className="about-image"></img>
        </div>
      </div>
    </div>
  );
}

export default About;
