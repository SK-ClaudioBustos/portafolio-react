import BarraNav from './BarraNav/BarraNav';
import SeccionHero from "./SeccionHero/SeccionHero";
import SobreMi from "./SobreMi/SobreMi";
import Skill from "./Skill/Skill";
import SeccionProyectos from "./SectionProyectos/SectionProyectos";
import Contacto from "./Contacto/Contacto";
import Footer from "./Footer/Footer";
import UpButton from "./UpButton/UpButton";
import SeccionExperiencia from "./SeccionExperiencia/SeccionExperiencia";
import { useState, useEffect } from 'react';
import mode from "./dark-mode.js";

const verifyMode = () => {
    const darkMode = localStorage.getItem("darkMode");
    if (darkMode === null) {
        localStorage.setItem("darkMode", "false");
    }
    else {
        if(darkMode==="true") {
            localStorage.setItem("darkMode", darkMode);
            mode(darkMode);
        }
        else {
            localStorage.setItem("darkMode", darkMode);
            mode(darkMode);
        }
    }
}

const Layout = () => {
    const [isDarkMode, setIsDarkMode] = useState("false");
    useEffect(() => {
        verifyMode();
    }, [])
    return (
        <div className="App">
            <BarraNav isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
            <SeccionHero />
            <SobreMi />
            <Skill />
            <SeccionExperiencia/>
            <SeccionProyectos />
            <Contacto />
            <Footer />
            <UpButton />
        </div>
    );
}

export default Layout;