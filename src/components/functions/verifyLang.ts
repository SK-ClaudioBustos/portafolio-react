const verifyLang = (i18n) => {
    const lang = localStorage.getItem("lang");
    if (!lang) {
        localStorage.setItem("lang", "es");
    } else {
        i18n.changeLanguage(lang);
    }
}

export default verifyLang;