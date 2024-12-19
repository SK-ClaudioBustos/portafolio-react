import { useEffect } from "react";
import { useDarkModeStore } from "../../store/darkMode.store";
import mode from "../functions/dark-mode";
import "./DarkModeButton.css";

function DarkModeButton(): JSX.Element {
    const isDarkMode = useDarkModeStore((state) => state.darkMode);
    const setIsDarkMode = useDarkModeStore((state) => state.setDarkMode);

    useEffect(() => {
        mode(isDarkMode);
    }, []);

    const handleChange = () => {
        const newDarkModeState = !isDarkMode;
        setIsDarkMode(newDarkModeState);
        mode(newDarkModeState);
    }

    return (
        <div className="nav-link d-flex justify-content-center">
            <button
                id="dark-mode-button"
                className="dark-mode-button"
                aria-label="Modo Oscuro - Dark Mode"
                onClick={handleChange}
            >
                <span><i className="bi bi-sun"></i></span>
                <span><i className="bi bi-moon"></i></span>
            </button>
        </div>
    );
}

export default DarkModeButton;