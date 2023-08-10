import "../styles/contact.css";
import githubLogo from "../assets/github-logo.png";
import linkedinLogo from "../assets/linkedin-logo.png";

function Contact() {
  return (
    <div className="socials">
      <p className="email">joonhyoo@protonmail.com</p>
      <a
        href="https://www.linkedin.com/in/joonhyoo/"
        className="github-button-container"
      >
        <img className="github-button" src={githubLogo} />
      </a>
      <a
        href="https://github.com/joonhyoo"
        className="linkedin-button-container"
      >
        <img className="linkedin-button" src={linkedinLogo} />
      </a>
    </div>
  );
}

export default Contact;
