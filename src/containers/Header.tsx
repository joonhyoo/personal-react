import { Navbar, Container, Nav } from "react-bootstrap";
import "../styles/general.css";
import { useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function Header() {
  const { pathname } = useLocation();
  return (
    <Navbar bg="light" data-bs-theme="light" fixed="top">
      <Container>
        <Navbar.Collapse id="basic-navbar-nav">
          {pathname === "/" ? (
            <Nav className="justify-content-around" style={{ flex: 1 }}>
              <Navbar.Brand href="#home">Joon.Dev</Navbar.Brand>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#blogs">Blogs</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
            </Nav>
          ) : (
            <Nav>
              <HashLink
                style={{
                  color: "black",
                  textDecoration: "none",
                  fontSize: "16px",
                }}
                to={"/#blogs"}
              >
                Back
              </HashLink>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
