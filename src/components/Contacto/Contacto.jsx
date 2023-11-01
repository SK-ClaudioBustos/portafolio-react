import "./Contacto.scss";

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
              <a
                className="anchorContact"
                target="_blank"
                rel="noopener noreferrer"
                href='&#109;ailto&#58;c&#37;&#54;C%61udio%62u%73%74o&#115;&#46;&#115;&#107;20&#48;0&#64;%67&#109;&#97;il&#46;c&#37;6F&#37;6D'>claudiobustos&#46;sk2000&#64;gmail&#46;&#99;om
                <button type="button">
                  Contacto
                  <i className="bi bi-envelope-check-fill"></i>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contacto;