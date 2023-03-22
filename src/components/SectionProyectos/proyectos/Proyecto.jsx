import "./Proyecto.scss";
// import prox from "./proximamente.svg";
import pro1 from "./img/proyecto_1.svg";
// import pro2 from "./img/proyecto_2.svg";

function Proyecto() {
    return ( 
        <div className="col-12 col-md-6 col-lg-4">
            <div className="proyecto">
                <img src={pro1} alt="Proyecto 1"/>
                <div className="overlay">
                    <p>Proyecto 1</p>
                    <div className="iconos-contenedor">
                    <a href="https://github.com/SK-ClaudioBustos/star-wars-clone-wars-website" target="_blank" rel="noopener noreferrer">
                        <i className="bi bi-github"></i>
                    </a>
                    <a href="https://proyect1-beta.vercel.app/" target="_blank" rel="noopener noreferrer">
                        <i className="bi bi-laptop"></i>
                    </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

// {/* <!-- Proyecto 2 --> */}
// <div className="col-12 col-md-6 col-lg-4">
// <div className="proyecto">
//   <img src={pro2} alt="Proyecto 2"></img>
//   <div className="overlay">
//     <p>Proyecto 2</p>
//     <div className="iconos-contenedor">
//       <a href="https://github.com/SK-ClaudioBustos/gun-shop" target="_blank" rel="noopener noreferrer">
//         <i className="bi bi-github"></i>
//       </a>
//       <a href="https://amazing-cajeta-96b327.netlify.app/" target="_blank" rel="noopener noreferrer">
//         <i className="bi bi-laptop"></i>
//       </a>
//     </div>
//   </div>
// </div>
// </div>
// {/* <!-- Proyecto 3 --> */}
// <div className="col-12 col-md-6 col-lg-4">
// <div className="proyecto">
//   <img src={prox} alt="Proyecto 3"></img>
//   <div className="overlay">
//     <p>Proyecto 3</p>
//     <div className="iconos-contenedor">
//       <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
//         <i className="bi bi-github"></i>
//       </a>
//       <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
//         <i className="bi bi-laptop"></i>
//       </a>
//     </div>
//   </div>
// </div>
// </div>

export default Proyecto;