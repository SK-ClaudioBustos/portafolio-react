import "./Skill.scss";
import SkillItem from "../SkillItem/SkillItem";
import itemsData from "./itemsData";

function Skill() {
  return (
    <section id="section-exp" className="skill seccion-clara">
      <div className="container text-center">
        <div className="row">
          {
            itemsData.map((item,key) => (
              <SkillItem
                key={key}
                titulo={item["titulo"]}
                cuerpo={item["cuerpo"]}
                icono={item["icono"]}
                items={item["items"]}
              />
            ))
          }
        </div>
      </div>
    </section>
  );
}

export default Skill;