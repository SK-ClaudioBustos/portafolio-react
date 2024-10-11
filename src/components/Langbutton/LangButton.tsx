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
        <button
            type="button"
            id="button-lang"
            onClick={changeLanguage}
        >
            <i className="bi bi-globe"></i>
            {i18n.language === "es" ? " Español" : " English"}
        </button>
    )
}

export default LangButton