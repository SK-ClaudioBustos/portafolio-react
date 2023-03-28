import logo from "./box.svg";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./BarraNav.scss";

function BarraNav(){
    return (
      <Navbar id="inicio" className="navbar" bg="light" expand="lg">
        <Container>
          <Navbar.Brand className="navbar-brand" href="#inicio">
            <img src={logo} width="50" alt="logo de la pagina web"/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <i className="bi bi-caret-down"></i>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto mt-1">
              <Nav.Link href="#section-sobre-mi">Sobre Mi</Nav.Link>
              <Nav.Link href="#section-exp">Experiencia</Nav.Link>
              <Nav.Link href="#section-proyectos">Proyectos</Nav.Link>
              <Nav.Link href="#section-contacto">Contacto</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}

export default BarraNav;