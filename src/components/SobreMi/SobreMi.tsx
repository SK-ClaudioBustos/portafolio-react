import { useTranslation } from "react-i18next";
import "./SobreMi.css";

export function SobreMi(): JSX.Element {
  const { t } = useTranslation("global");
  return (
    <section id="section-sobre-mi" className="sobre-mi">
      <div className="contenedor text-center">
        <h2 className="seccion-titulo">{t("about-me.title")}</h2>
        <p className="seccion-texto">{t("about-me.introduction")}</p>
      </div>
    </section>
  );
}