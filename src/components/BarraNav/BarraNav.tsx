import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ColorButton from "../ColorButton/ColorButton";
import LangButton from "../Langbutton/LangButton";
import { useTranslation } from "react-i18next";
import { Dispatch, SetStateAction } from "react";
import "./BarraNav.scss";

interface IBarraNavProps {
  isDarkMode: string
  setIsDarkMode: Dispatch<SetStateAction<string>>
}

function BarraNav(props: IBarraNavProps): JSX.Element {
  const { isDarkMode, setIsDarkMode } = props;
  const { t } = useTranslation("global");
  const logo = require("./box.svg") as string;
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
              <Nav.Link className="nav-link text-center" href="#section-sobre-mi">{t("navbar.about-me")}</Nav.Link>
              <Nav.Link className="nav-link text-center" href="#section-skill">{t("navbar.skills")}</Nav.Link>
              <Nav.Link className="nav-link text-center" href="#section-exp">{t("navbar.experiencies")}</Nav.Link>
              <Nav.Link className="nav-link text-center" href="#section-proyectos">{t("navbar.projects")}</Nav.Link>
              <Nav.Link className="nav-link text-center" href="#section-contacto">{t("navbar.contact")}</Nav.Link>
              <Nav.Link><ColorButton isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/></Nav.Link>
              <LangButton/>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}

export default BarraNav;