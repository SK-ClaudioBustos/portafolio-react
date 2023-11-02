import logo from "./box.svg";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ColorButton from "../ColorButton/ColorButton";
import "./BarraNav.scss";

function BarraNav({isDarkMode,setIsDarkMode}){
    return (
      <Navbar id="inicio" className="navbar" expand="lg">
        <Container>
          <Navbar.Brand className="navbar-brand d-flex align-items-center justify-content-center" href="#inicio">
            <img src={logo} width="30" alt="logo de la pagina web"/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <i className="bi bi-caret-down"></i>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="nav-link" href="#section-sobre-mi">Sobre Mi</Nav.Link>
              <Nav.Link className="nav-link" href="#section-exp">Experiencia</Nav.Link>
              <Nav.Link className="nav-link" href="#section-proyectos">Proyectos</Nav.Link>
              <Nav.Link className="nav-link" href="#section-contacto">Contacto</Nav.Link>
              <Nav.Link><ColorButton isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}

export default BarraNav;