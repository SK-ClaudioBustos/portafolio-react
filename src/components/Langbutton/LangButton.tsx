import { useTranslation } from "react-i18next";
import "./LangButton.css";

const LangButton = (): JSX.Element => {
    const { i18n } = useTranslation("global");
    const actualLanguage = i18n.language;

    const changeLanguage = () => {
        const langSeted = actualLanguage === "es" ? "en" : "es";
        i18n.changeLanguage(langSeted);
        localStorage.setItem("lang", langSeted);
    }

    return (
        <div className="d-flex align-items-center justify-content-center">
            <button
                className="lang-button"
                aria-label={actualLanguage === "es" ? "Cambiar idioma" : "Change Language"}
                onClick={changeLanguage}
            >
                {
                    actualLanguage === "es"
                        ? <span>ES</span>
                        : <span>EN</span>
                }
            </button>
        </div>
    )
}

export default LangButton