import "../styles/contact.css";
import githubLogo from "../assets/github-logo.png";
import linkedinLogo from "../assets/linkedin-logo.png";

function Contact() {
  return (
    <div className="socials">
      <p className="email">joonhyoo@protonmail.com</p>
      <img className="github-button" src={githubLogo} />
      <img className="linkedin-button" src={linkedinLogo} />
    </div>
  );
}

export default Contact;
