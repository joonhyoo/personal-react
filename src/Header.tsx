import { Button } from "react-bootstrap";
import "./header.css";

function Header() {
  return (
    <div className="header-container">
      <div className="button-container">
        <Button variant="light">Joon.dev</Button>
      </div>
      <div className="header-center">
        <div className="header-item">About Me</div>
        <div className="header-item">Projects</div>
      </div>
      <div className="button-container">
        <Button variant="light">Contact Me</Button>
      </div>
    </div>
  );
}

export default Header;
