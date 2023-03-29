import "./Experiencia.scss";

function Experiencia() {
    return (  
        <section id="section-exp" className="experiencia seccion-clara">
          <div className="container text-center">
            <div className="row">

              {/* <!-- Desarrollo Web--> */}
              <div className="columna col-12 col-md-6">
                <i className="bi bi-laptop"></i>
                <p className="experiencia-titulo">Desarrollo Web</p>
                <p> 
                  Estos son mis conocimientos tecnológicos.
                </p>
                <div className="badges-contenedor">
                  <span className="badge rounded-pill">HMTL</span>
                  <span className="badge rounded-pill">CSS</span>
                  <span className="badge rounded-pill">Javascript</span>
                  <span className="badge rounded-pill">React</span>
                  <span className="badge rounded-pill">Bootstrap</span>
                  <span className="badge rounded-pill">Sass</span>
                </div>
              </div>

              {/* <!-- Conocimientos --> */}
              <div className="columna col-12 col-md-6">
                <i className="bi bi-book"></i>
                <p className="experiencia-titulo">Otros Conocimientos</p>
                <p>
                  Tambien poseo conocimientos en algunos lenguajes de programación/consulta.
                </p>
                <div className="badges-contenedor">
                  <span className="badge rounded-pill ">PHP</span>
                  <span className="badge rounded-pill ">Laravel</span>
                  <span className="badge rounded-pill ">Python</span>
                  <span className="badge rounded-pill ">Java</span>
                  <span className="badge rounded-pill ">C++</span>
                  <span className="badge rounded-pill ">SQL</span>
                </div>
              </div>
            </div>
            
          </div>
        </section>
    );
}

export default Experiencia;