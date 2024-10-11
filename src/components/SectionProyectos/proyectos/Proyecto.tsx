import "./Proyecto.css";

interface IProyectoProps {
    src: string
    alt: string
    titulo: string
    git: string
    web: string
}

function Proyecto(props: IProyectoProps): JSX.Element {
    const { src, alt, titulo, git, web } = props;
    return (
        <div className="col-12 col-md-6 col-lg-4">
            <div id="proyecto" className="proyecto">
                <img src={require(`./img/${src}`)} alt={alt} />
                <div className="overlay">
                    <p>{titulo}</p>
                    <div className="iconos-contenedor">
                        <a href={git} aria-label={`Ir al repositorio del proyecto en ${git}`} target={git === "#" ? "_self" : "_blank"} rel="noopener noreferrer">
                            <i className="bi bi-github"></i>
                        </a>
                        <a href={web} aria-label={`Ir a la web del proyecto en ${web}`} target={web === "#" ? "_self" : "_blank"} rel="noopener noreferrer">
                            <i className="bi bi-laptop"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Proyecto;