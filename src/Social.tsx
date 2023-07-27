import { Button } from "react-bootstrap";
import "./contact.css";

function Social() {
  return (
    <div className="socials">
      <Button variant="dark">Email</Button>
      <div>joonhyoo@protonmail.com</div>
      <Button variant="danger">GitHub</Button>
      <Button variant="info">LinkedIn</Button>
    </div>
  );
}

export default Social;
