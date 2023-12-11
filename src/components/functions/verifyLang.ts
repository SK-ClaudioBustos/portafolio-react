const verifyLang = (i18n): void => {
        const lang = localStorage.getItem("lang");
        if (lang === null) {
            localStorage.setItem("lang", "es");
        } else {
            if (lang === "es") {
                i18n.changeLanguage("es");
            } else {
                i18n.changeLanguage("en");
            }
        }
}

export default verifyLang;