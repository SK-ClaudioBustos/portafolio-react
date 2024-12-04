import mode from "./dark-mode";

const verifyMode = (): void => {
    const darkMode = localStorage.getItem("darkMode");
    if (darkMode === null) {
        localStorage.setItem("darkMode", "false");
    } else {
        if (darkMode === "true") {
            mode(true);
        } else {
            mode(false);
        }
    }
}

export default verifyMode;