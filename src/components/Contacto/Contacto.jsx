import "./Contacto.scss";

function Contacto() {
    return (  
        <section className="contacto seccion-oscura">
            <div className="contacto-div text-center d-flex rectangulo justify-content-evenly">
              <div className="row">
                <div className="col-12 col-md-4 seccion-titulo">
                  Hablemos
                </div>
                <div className="col-12 col-md-4 descripcion">
                  Contáctame para iniciar tu proyecto de desarrollo web y con gusto te ayudaré
                </div>
                <div className="col-12 col-md-4">
                  <a href="#">
                    <button type="button">
                      Contacto
                      <i className="bi bi-envelope-check-fill"></i>
                    </button>
                  </a>
                </div>
              </div>
            </div> 
        </section>
    );
}

export default Contacto;