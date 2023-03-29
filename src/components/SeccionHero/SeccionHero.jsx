import profile from "./profile.svg";
import "./SeccionHero.scss";

function SeccionHero(){
    return(
        <section id="sec-hero" className="hero align-items-stretch">
            <div className="hero-principal d-flex flex-column justify-content-center align-items-center">
                <img className="hero-imagen rounded-circle" src={profile} alt="Foto de Claudio Bustos"/>
                <h1>Hola, soy Claudio Bustos</h1>
                <h2>Desarrollador de sitios web - Frontend</h2>
            </div>
        </section>
    );
}

export default SeccionHero;