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
                <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5 col-sm-12 experiencia-col">
                    <div className="ms-4">
                        <h3 className="experiencia-lugar">{lugar}</h3>
                        <h4 className="experiencia-puesto">{puesto}</h4>
                        <span className="experiencia-duracion">{duracion}</span>
                    </div>
                </div>
                <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7 col-sm-12 experiencia-col">
                    <p className="experiencia-descripcion">{descripcion}</p>
                </div>
            </div>
        </div>
    )
}

export default ExperienciaCard;