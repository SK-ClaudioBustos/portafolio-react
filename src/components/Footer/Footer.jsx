import braces from "./braces.svg";
import "./Footer.scss";

function Footer() {
    return (  
        <footer id="final" className="seccion-oscura d-flex flex-column align-items-center justify-content-center">
          <a href="#inicio">
            <img className="footer-logo" src={braces} alt="Logo de portafolio"></img>
          </a>
          <p className="footer-texto text-center">Aprendo y creo todos los días.<br></br>Creemos un proyecto juntos.</p>
          <div className="iconos-redes-sociales d-flex flex-wrap align-items-center justify-content-center">
            <a href="https://www.linkedin.com/in/claudio-bustos-rodriguez-239a7a216/" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-linkedin"></i>
            </a>
            <a href="https://github.com/SK-ClaudioBustos" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-github"></i>
            </a>
          </div>
          <div className="derechos-de-autor">Creado por Claudio Bustos(2023) &#169;</div>
        </footer>
    );
}

export default Footer;