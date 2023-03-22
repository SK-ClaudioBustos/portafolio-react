import logo from "./box.svg";
import "./BarraNav.scss";

function BarraNav(){
    return (
        <nav id="inicio" className="navbar navbar-expand-md navbar-light">
            <div className="container-fluid">
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-toggler" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbar-toggler">
                <a className="navbar-brand" href="#final">
                    <img src={logo} width="50" alt="logo de la pagina web"></img>
                </a>
                <ul className="navbar-nav d-flex justify-content-center align-items-center">                  
                  <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="#section-sobre-mi">Sobre mi</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#section-proyectos">Proyectos</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#section-contactos">Contacto</a>
                  </li>
                </ul>
              </div>
            </div>
        </nav>
    );
}

export default BarraNav;