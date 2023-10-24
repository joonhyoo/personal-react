import "../styles/contact.css";
import githubLogo from "../assets/images/github-logo.png";
import linkedinLogo from "../assets/images/linkedin-logo.png";

function Contact() {
  return (
    <div className="socials">
      <div className="link-container">
        <a
          href="https://github.com/joonhyoo"
          target="_blank"
          className="github-button-container"
        >
          <img className="github-button" src={githubLogo} />
        </a>
        <a
          href="https://www.linkedin.com/in/joonhyoo/"
          target="_blank"
          className="linkedin-button-container"
        >
          <img className="linkedin-button" src={linkedinLogo} />
        </a>
      </div>
    </div>
  );
}

export default Contact;
