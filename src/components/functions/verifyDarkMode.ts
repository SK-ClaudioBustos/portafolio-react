import mode from "./dark-mode";

export const verifyDarkMode = (setIsDarkMode: (boolean: any) => void) => {
    const savedDarkMode = localStorage.getItem("darkMode");
    if (savedDarkMode) {
        const isDarkMode: boolean = JSON.parse(savedDarkMode).state.darkMode;
        setIsDarkMode(isDarkMode);
        mode(isDarkMode);
    }
}