import { useTranslation } from "react-i18next";
import ExperienciaCard from "./ExperienciaCard/ExperienciaCard";
import useGetData from "./experienciasData";
import "./SeccionExperiencia.css";

export const SeccionExperiencia = (): JSX.Element => {
    const { t } = useTranslation("global");

    const data = useGetData();

    return (
        <section id="section-exp" className="section-exp">
            <h2 className="experiencia-titulo">{t("exp.title")}</h2>
            <div>
                {
                    data.map(({ lugar, duracion, puesto, descripcion }, key) => (
                        <ExperienciaCard key={key} lugar={lugar} duracion={duracion} puesto={puesto} descripcion={descripcion} />
                    ))
                }
            </div>
        </section>
    )
}