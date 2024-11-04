import { useTranslation } from "react-i18next";
import "./SeccionHero.css";

function SeccionHero(): JSX.Element {
    const { t } = useTranslation("global");
    // no cambies esto, es para que pueda cargar el archiv SVG
    const photo = "profile";
    return (
        <section id="sec-hero" className="hero align-items-stretch">
            <div className="hero-principal d-flex flex-column justify-content-center align-items-center">
                <img className="hero-imagen" src={require(`./${photo}.svg`)} alt={t("hero.photo")}/>
                <h1>{t("hero.h1")}</h1>
                <h2>{t("hero.h2")}</h2>
            </div>
        </section>
    );
}

export default SeccionHero;