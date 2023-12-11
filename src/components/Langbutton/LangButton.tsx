import { useTranslation } from "react-i18next";

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
            className="btn btn-outline-primary"
            onClick={changeLanguage}
        >
            <i className="bi bi-globe"></i>
            {i18n.language === "es" ? " Español" : " English"}
        </button>
    )
}

export default LangButton