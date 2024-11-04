import { useTranslation } from "react-i18next";
import "./LangButton.css";
const LangButton = (): JSX.Element => {
    const { i18n } = useTranslation("global");

    const changeLanguage = (): void => {
        if (i18n.language === "es") {
            i18n.changeLanguage("en");
            localStorage.setItem("lang", "en");
        } else {
            i18n.changeLanguage("es");
            localStorage.setItem("lang", "es");
        }
    }
    return (
        <a role="button" className="nav-link">
            <div className="d-flex justify-content-center">
                <button
                    className={i18n.language === "es" ? "switch-lang active" : "switch-lang"}
                    aria-label="Cambiar idioma"
                    onClick={changeLanguage}
                >
                    <span>ES</span>
                    <span>EN</span>
                </button>
            </div>
        </a>
    )
}

export default LangButton