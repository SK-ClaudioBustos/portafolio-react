import BarraNav from './BarraNav/BarraNav';
import SeccionHero from "./SeccionHero/SeccionHero";
// import SobreMi from "./SobreMi/SobreMi";
import Skill from "./Skill/Skill";
import SeccionProyectos from "./SectionProyectos/SectionProyectos";
import Contacto from "./Contacto/Contacto";
import Footer from "./Footer/Footer";
import UpButton from "./UpButton/UpButton";
import SeccionExperiencia from "./SeccionExperiencia/SeccionExperiencia";
import { useState, useEffect } from 'react';
import verifyMode from "./functions/verifyMode";
import verifyLang from "./functions/verifyLang";
import { useTranslation } from "react-i18next";

const Layout = (): JSX.Element => {
    const [isDarkMode, setIsDarkMode] = useState("false");
    const { i18n } = useTranslation("global");

    useEffect(() => {
        verifyMode();
        verifyLang(i18n);
    }, []);

    return (
        <div className="App">
            <BarraNav isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
            <SeccionHero />
            {/* <SobreMi /> */}
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