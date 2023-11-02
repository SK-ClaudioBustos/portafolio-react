import "./Proyecto.scss";

function Proyecto({src,alt,titulo,git,web}) {
    return ( 
        <div className="col-12 col-md-6 col-lg-4">
            <div id="proyecto" className="proyecto">
                <img src={require(`./img/${src}.svg`)} alt={alt}/>
                <div className="overlay">
                    <p>{titulo}</p>
                    <div className="iconos-contenedor">
                    <a href={git} target={web==="#" ? "_self" : "_blank"} rel="noopener noreferrer">
                        <i className="bi bi-github"></i>
                    </a>
                    <a href={web} target={web==="#" ? "_self" : "_blank"} rel="noopener noreferrer">
                        <i className="bi bi-laptop"></i>
                    </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Proyecto;