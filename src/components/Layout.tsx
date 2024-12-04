import { useEffect } from 'react';
import { useTranslation } from "react-i18next";
import BarraNav from './BarraNav/BarraNav';
import Contacto from "./Contacto/Contacto";
import Footer from "./Footer/Footer";
import verifyLang from "./functions/verifyLang";
import verifyMode from "./functions/verifyMode";
import SeccionExperiencia from "./SeccionExperiencia/SeccionExperiencia";
import SeccionHero from "./SeccionHero/SeccionHero";
import SeccionProyectos from "./SectionProyectos/SectionProyectos";
import Skill from "./Skill/Skill";
import UpButton from "./UpButton/UpButton";
import SobreMi from './SobreMi/SobreMi';

const Layout = (): JSX.Element => {
    const { i18n } = useTranslation("global");

    useEffect(() => {
        verifyMode();
        verifyLang(i18n);
    }, []);

    return (
        <div className="App">
            <BarraNav />
            <SeccionHero />
            <Skill />
            <SobreMi/>
            <SeccionExperiencia />
            <SeccionProyectos />
            <Contacto />
            <Footer />
            <UpButton />
        </div>
    );
}

export default Layout;