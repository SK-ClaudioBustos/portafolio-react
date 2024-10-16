interface IExperienciaCard {
    lugar: string
    puesto: string
    duracion: string
    descripcion: string
}

const ExperienciaCard = (props: IExperienciaCard): JSX.Element => {
    const { lugar = "sin lugar", puesto = "sin puesto", duracion = "sin duracion", descripcion = "sin descripcion" } = props;
    return (
        <div className="container experiencia-container">
            <div className="row row-xxl-12 row-xl-12 row-lg-12 row-md-12 row-sm-12 experiencia-row">
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 experiencia-col">
                    <div className="ms-4">
                        <h3 className="experiencia-lugar">{lugar}</h3>
                        <h4 className="experiencia-puesto">{puesto}</h4>
                        <span className="experiencia-duracion">{duracion}</span>
                    </div>
                </div>
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 experiencia-col">
                    <p className="experiencia-descripcion">{descripcion}</p>
                </div>
            </div>
        </div>
    )
}

export default ExperienciaCard;