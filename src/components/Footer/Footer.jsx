import { useTranslation } from "react-i18next";
import braces from "./braces.svg";
import "./Footer.scss";

function Footer() {
  const { t } = useTranslation("global");
  return (
    <footer id="final" className="seccion-oscura d-flex flex-column align-items-center justify-content-center">
      <a id="a-logo" href="#inicio">
        <img className="footer-logo" src={braces} alt={t("footer.logo")}></img>
      </a>
      <p className="footer-texto text-center">{t("footer.t1")}<br></br>{t("footer.t2")}</p>
      <div className="iconos-redes-sociales d-flex flex-wrap align-items-center justify-content-center">
        <a href="https://github.com/SK-ClaudioBustos" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-github"></i>
        </a>
        <a href="https://www.instagram.com/claudiobustos.r/" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-instagram"></i>
        </a>
      </div>
      <div className="derechos-de-autor">{t("footer.by")}(2023) &#169;</div>
    </footer>
  );
}

export default Footer;