import { useTranslation } from "react-i18next";
import "./Footer.css";

function Footer(): JSX.Element {
  const { t } = useTranslation("global");
  return (
    <footer id="final" className="d-flex flex-column align-items-center justify-content-center">
      <p className="footer-texto text-center">{t("footer.t1")}<br></br>{t("footer.t2")}</p>
      <div className="iconos-redes-sociales d-flex flex-wrap align-items-center justify-content-center">
        <a aria-label="Enlace a cuenta de linkedin" href="https://www.linkedin.com/in/claudio-bustos-395a0631a" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-linkedin"></i>
        </a>
        <a aria-label="Enlace a cuenta de github" href="https://github.com/SK-ClaudioBustos" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-github"></i>
        </a>
        <a aria-label="Enlace a cuenta de instagram" href="https://www.instagram.com/claudiobustos.r/" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-instagram"></i>
        </a>
      </div>
      <div className="derechos-de-autor">{t("footer.by")}(2023) &#169;</div>
    </footer>
  );
}

export default Footer;