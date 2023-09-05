import { Navbar, Container, Nav } from "react-bootstrap";
import "../styles/header.css";
import "../styles/general.css";

function Header() {
  return (
    <Navbar bg="light" data-bs-theme="light" fixed="top">
      <Container>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-around" style={{ flex: 1 }}>
            <Navbar.Brand href="/#home">Joon.Dev</Navbar.Brand>
            <Nav.Link href="/#about">About</Nav.Link>
            <Nav.Link href="/#blogs">Blogs</Nav.Link>
            <Nav.Link href="/#projects">Projects</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
