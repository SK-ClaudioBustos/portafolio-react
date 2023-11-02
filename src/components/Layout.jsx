import BarraNav from '../components/BarraNav/BarraNav';
import SeccionHero from "../components/SeccionHero/SeccionHero";
import SobreMi from "../components/SobreMi/SobreMi";
import Skill from "../components/Skill/Skill";
import SeccionProyectos from "../components/SectionProyectos/SectionProyectos";
import Contacto from "../components/Contacto/Contacto";
import Footer from "../components/Footer/Footer";
import UpButton from "../components/UpButton/UpButton";
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
            <SeccionProyectos />
            <Contacto />
            <Footer />
            <UpButton />
        </div>
    );
}

export default Layout;