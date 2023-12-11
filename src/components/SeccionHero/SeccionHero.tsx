import { useTranslation } from "react-i18next";
import "./SeccionHero.scss";

function SeccionHero(): JSX.Element {
    const { t } = useTranslation("global");
    const profile = require("./profile.png") as string;
    return (
        <section id="sec-hero" className="hero align-items-stretch">
            <div className="hero-principal d-flex flex-column justify-content-center align-items-center">
                <img className="hero-imagen rounded-circle" src={profile} alt={t("hero.photo")}/>
                <h1>{t("hero.h1")}</h1>
                <h2>{t("hero.h2")}</h2>
            </div>
        </section>
    );
}

export default SeccionHero;