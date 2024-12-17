import Proyecto from "./proyectos/Proyecto";
import useGetData from "./proyect_data";
import { useTranslation } from "react-i18next";
import "./SectionProyectos.css";

export function SectionProyectos(): JSX.Element {
    const data = useGetData();
    const { t } = useTranslation("global");
    return (
        <section id="section-proyectos" className="proyectos-recientes seccion-clara d-flex flex-column">
          <h2 className="seccion-titulo">{t("proyects.title")}</h2>
          <h3 className="seccion-descripcion">{t("proyects.description")}</h3>
          <div className="container text-center proyectos-contenedor">
            <div className="row">
                {data.map((proyect, index) =>
                  <Proyecto
                      key={index}
                      alt={proyect.alt}
                      src={proyect.src}
                      titulo={proyect.titulo}
                      git={proyect.git}
                      web={proyect.web}
                  />
                  )
                }
            </div>
          </div>
        </section>
    );
}