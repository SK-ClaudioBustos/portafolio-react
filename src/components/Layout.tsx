import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import verifyLang from './functions/verifyLang';
import { BarraNav, Contacto, Footer, SeccionExperiencia, SeccionHero, SectionProyectos, Skill, SobreMi, UpButton } from './index';

const Layout = () => {
    const { i18n } = useTranslation("global");

    useEffect(() => {
        verifyLang(i18n);
    }, []);

    return (
        <>
            <BarraNav />
            <SeccionHero />
            <Skill />
            <SobreMi />
            <SeccionExperiencia />
            <SectionProyectos />
            <Contacto />
            <Footer />
            <UpButton />
        </>
    );
}

export default Layout;