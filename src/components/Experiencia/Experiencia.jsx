import "./Experiencia.scss";
import ExperienciaItem from "../ExperienciaItem/ExperienciaItem";
import itemsData from "./itemsData";

function Experiencia() {
  return (
    <section id="section-exp" className="experiencia seccion-clara">
      <div className="container text-center">
        <div className="row">
          {
            itemsData.map((item) => (
              <ExperienciaItem
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

export default Experiencia;