import { useTranslation } from "react-i18next";
import SkillItem from "../SkillItem/SkillItem";
import useGetData from "./itemsData";
import "./Skill.css";

export function Skill(): JSX.Element {
  const { t } = useTranslation("global");
  const itemsData = useGetData();
  return (
    <section id="section-skill" className="skill seccion-clara">
      <h2 className="skill-titulo">{t("skills.title")}</h2>
      <div className="container text-center">
        <div className="row">
          {
            itemsData.map((item, key) => (
              <SkillItem
                key={key}
                titulo={item.titulo}
                cuerpo={item.cuerpo}
                icono={item.icono}
                items={item.items}
              />
            ))
          }
        </div>
      </div>
    </section>
  );
}