import mode from "./dark-mode";

const verifyMode = (): void => {
    const darkMode = localStorage.getItem("darkMode");
    if (darkMode === null) {
        localStorage.setItem("darkMode", "false");
    } else {
        if (darkMode === "true") {
            localStorage.setItem("darkMode", darkMode);
            mode(darkMode);
        } else {
            localStorage.setItem("darkMode", darkMode);
            mode(darkMode);
        }
    }
}

export default verifyMode;