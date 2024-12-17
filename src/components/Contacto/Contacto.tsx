import { useTranslation } from "react-i18next";
import "./Contacto.css";

export function Contacto(): JSX.Element {
  const { t } = useTranslation("global");
  return (
    <section id="section-contacto" className="contacto">
      <div className="container">
        <div className="contacto-div text-center d-flex rectangulo justify-content-evenly">
          <div className="row">
            <div className="col-12 col-md-4 seccion-titulo-contacto">
              {t("contact.t1")}
            </div>
            <div className="col-12 col-md-4 descripcion">
              {t("contact.t2")}
            </div>
            <div className="col-12 col-md-4">
              <a
                className="anchorContact"
                target="_blank"
                rel="noopener noreferrer"
                href='&#109;ailto&#58;c&#37;&#54;C%61udio%62u%73%74o&#115;&#46;&#115;&#107;20&#48;0&#64;%67&#109;&#97;il&#46;c&#37;6F&#37;6D'>claudiobustos&#46;sk2000&#64;gmail&#46;&#99;om
                <button type="button">
                  <i className="bi bi-envelope-check-fill" />
                  {t("contact.t3")}
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}