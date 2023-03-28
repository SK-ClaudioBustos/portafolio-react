import "./Contacto.scss";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

function copiarPortapeles() {
  navigator.clipboard.writeText("claudiobustos.sk2000@gmail.com");
}

function Contacto() {
    return (  
        <section id="section-contacto" className="contacto seccion-oscura">
          <div className="container">
            <div className="contacto-div text-center d-flex rectangulo justify-content-evenly">
                <div className="row">
                  <div className="col-12 col-md-4 seccion-titulo">
                    Hablemos
                  </div>
                  <div className="col-12 col-md-4 descripcion">
                    Contáctame para iniciar tu proyecto de desarrollo web y con gusto te ayudaré
                  </div>
                  <div className="col-12 col-md-4">
                      <OverlayTrigger key="top" placement="top" overlay={
                          <Tooltip>
                            Pulse para copiar el email
                          </Tooltip>
                      }>
                        <button type="button" onClick={() => copiarPortapeles()}>
                          Contacto
                          <i className="bi bi-envelope-check-fill"></i>
                        </button>
                      </OverlayTrigger>
                  </div>
                </div>
              </div>
          </div>
        </section>
    );
}

export default Contacto;