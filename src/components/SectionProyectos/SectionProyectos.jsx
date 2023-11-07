import "./SectionProyectos.scss";
import Proyecto from "./proyectos/Proyecto";
import data from "./proyect_data";

function SectionProyectos() {
    return (  
        <section id="section-proyectos" className="proyectos-recientes seccion-clara d-flex flex-column">
          <h2 className="seccion-titulo">Mis proyectos recientes</h2>
          <h3 className="seccion-descripcion">Estos son mis proyectos</h3>
          <div className="container text-center proyectos-contenedor">
            <div className="row">
                {data.map((proyect,index) => 
                  <Proyecto 
                      key={index}
                      src={proyect["src"]}
                      titulo={proyect["titulo"]}
                      git={proyect["git"]}
                      web={proyect["web"]}
                  />
                  )
                }
            </div>
          </div>
        </section>
    );
}

export default SectionProyectos;