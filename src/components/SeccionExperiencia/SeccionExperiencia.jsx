import "./SeccionExperiencia.scss";
import ExperienciaCard from "./ExperienciaCard/ExperienciaCard";
import data from "./experienciasData.js";

const SeccionExperiencia = () => {
    return (
        <section id="section-exp">
            <h2 className="experiencia-titulo">Experiencias</h2>
                { 
                data.map(({ lugar, duracion, puesto, descripcion }, key) => (
                    <ExperienciaCard key={key} lugar={lugar} duracion={duracion} puesto={puesto} descripcion={descripcion}/>
                ))
                }
        </section>
    )
}

export default SeccionExperiencia