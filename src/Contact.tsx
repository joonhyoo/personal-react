import { Button } from "react-bootstrap";
import "./contact.css";

function Contact() {
  return (
    <div className="socials">
      <div>joonhyoo@protonmail.com</div>
      <Button variant="danger">GitHub</Button>
      <Button variant="info">LinkedIn</Button>
    </div>
  );
}

export default Contact;
