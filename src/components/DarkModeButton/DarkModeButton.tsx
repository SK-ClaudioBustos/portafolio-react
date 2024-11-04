import { Dispatch, SetStateAction } from "react";
import mode from "../functions/dark-mode";
import "./DarkModeButton.css";

interface IColorButtonProps {
    isDarkMode: boolean
    setIsDarkMode: Dispatch<SetStateAction<boolean>>
}

function DarkModeButton(props: IColorButtonProps): JSX.Element {
    const { isDarkMode, setIsDarkMode } = props;
    const handleChange = (): void => {
        const state = isDarkMode ? "true" : "false";
        setIsDarkMode(!isDarkMode);
        localStorage.setItem("darkMode", state);
        mode(state);
    }

    return (
        <a role="button" className="nav-link">
            <div className="d-flex justify-content-center">
                <button
                    className="switch"
                    aria-label="Modo Oscuro - Dark Mode"
                    id="switch"
                    onClick={handleChange}
                >
                    <span><i className="bi bi-sun"></i></span>
                    <span><i className="bi bi-moon"></i></span>
                </button>
            </div>
        </a>
    );
}

export default DarkModeButton;