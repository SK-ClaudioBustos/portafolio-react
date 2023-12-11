import "../Skill/Skill.scss";

interface ISkillItemProps {
    titulo: string
    cuerpo: string
    icono: string
    items: string[]
}

const SkillItem = (props: ISkillItemProps): JSX.Element => {
    const { titulo, cuerpo, icono, items = [] } = props;
    return (
        <div className="columna col-12 col-md-6">
            <i className={`bi bi-${icono}`}></i>
            <p className="skill-titulo">{titulo}</p>
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

export default SkillItem;