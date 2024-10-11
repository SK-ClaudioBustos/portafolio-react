import { Dispatch, SetStateAction } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useTranslation } from "react-i18next";
import ColorButton from "../ColorButton/ColorButton";
import LangButton from "../Langbutton/LangButton";
import "./BarraNav.css";

interface IBarraNavProps {
  isDarkMode: string
  setIsDarkMode: Dispatch<SetStateAction<string>>
}

function BarraNav(props: IBarraNavProps): JSX.Element {
  const { isDarkMode, setIsDarkMode } = props;
  const { t } = useTranslation("global");
  return (
    <Navbar id="inicio" className="navbar" expand="lg">
      <Container>
        <Navbar.Brand className="navbar-brand d-flex align-items-center justify-content-center">
          <svg xmlns="./box.svg" width="30" height="30" fill="currentColor" className="bi bi-box" viewBox="0 0 16 16">
            <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5 8 5.961 14.154 3.5 8.186 1.113zM15 4.239l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z" />
          </svg>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <i className="bi bi-caret-down"></i>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link aria-label="Ir a seccion sobre mí" className="nav-link text-center" href="#section-sobre-mi">{t("navbar.about-me")}</Nav.Link>
            <Nav.Link aria-label="Ir a seccion habilidades" className="nav-link text-center" href="#section-skill">{t("navbar.skills")}</Nav.Link>
            <Nav.Link aria-label="Ir a seccion experiencias" className="nav-link text-center" href="#section-exp">{t("navbar.experiencies")}</Nav.Link>
            <Nav.Link aria-label="Ir a seccion proyectos" className="nav-link text-center" href="#section-proyectos">{t("navbar.projects")}</Nav.Link>
            <Nav.Link aria-label="Ir a seccion contacto" className="nav-link text-center" href="#section-contacto">{t("navbar.contact")}</Nav.Link>
            <a role="button" className="nav-link"><ColorButton isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} /></a>
            <LangButton />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BarraNav;