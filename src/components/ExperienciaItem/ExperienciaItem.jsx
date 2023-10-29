import "../Experiencia/Experiencia.scss";

const ExperienciaItem = ({ titulo, cuerpo, icono, items = [] }) => {
    return (
        <div className="columna col-12 col-md-6">
            <i className={`bi bi-${icono}`}></i>
            <p className="experiencia-titulo">{titulo}</p>
            <p>
                {cuerpo}
            </p>
            <div className="badges-contenedor">
                {
                    items.map((item) => (
                        <span key={item} className="badge rounded-pill">{item}</span>
                    ))
                }
            </div>
        </div>
    )
}

export default ExperienciaItem;