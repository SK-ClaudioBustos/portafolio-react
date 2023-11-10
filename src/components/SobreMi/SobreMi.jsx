import { useTranslation } from "react-i18next";
import "./SobreMi.scss";

function SobreMi() {
  const {t} = useTranslation("global");
  return (
    <section id="section-sobre-mi" className="sobre-mi">
      <div className="contenedor text-center">
        <h2 className="seccion-titulo">{t("about-me.title")}</h2>
        <p className="seccion-texto">{t("about-me.introduction")}</p>
      </div>
    </section>
  );
}

export default SobreMi