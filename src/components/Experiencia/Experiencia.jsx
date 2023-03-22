import "./Experiencia.scss";

function Experiencia() {
    return (  
        <section className="experiencia seccion-clara">
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
                  <span className="badge rounded-pill text-bg-primary">HMTL</span>
                  <span className="badge rounded-pill text-bg-primary">CSS</span>
                  <span className="badge rounded-pill text-bg-primary">Javascript</span>
                  <span className="badge rounded-pill text-bg-primary">React</span>
                  <span className="badge rounded-pill text-bg-primary">Bootstrap</span>
                  <span className="badge rounded-pill text-bg-primary">Sass</span>
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
                  <span className="badge rounded-pill text-bg-primary">PHP</span>
                  <span className="badge rounded-pill text-bg-primary">Laravel</span>
                  <span className="badge rounded-pill text-bg-primary">Python</span>
                  <span className="badge rounded-pill text-bg-primary">Java</span>
                  <span className="badge rounded-pill text-bg-primary">C++</span>
                  <span className="badge rounded-pill text-bg-primary">SQL</span>
                </div>
              </div>
            </div>
            
          </div>
        </section>
    );
}

export default Experiencia;