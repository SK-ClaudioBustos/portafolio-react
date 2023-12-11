import SkillItem from "../SkillItem/SkillItem";
import useGetData from "./itemsData";
import "./Skill.scss";

function Skill(): JSX.Element {
  const itemsData = useGetData();
  return (
    <section id="section-skill" className="skill seccion-clara">
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

export default Skill;