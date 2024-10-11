import "./ColorButton.css";
import mode from "../functions/dark-mode";
import { Dispatch, SetStateAction } from "react";

interface IColorButtonProps {
    isDarkMode: string
    setIsDarkMode: Dispatch<SetStateAction<string>>
}

function ColorButton(props: IColorButtonProps): JSX.Element {
    const { isDarkMode, setIsDarkMode } = props;
    const handleChange = (): void => {
        const state = isDarkMode === "true" ? "false" : "true";
        setIsDarkMode(state);
        localStorage.setItem("darkMode", state);
        mode(state);
    }

    return (
        <div className="d-flex justify-content-center">
            <button onClick={handleChange} aria-label="Modo Oscuro - Dark Mode" id="switch" className="switch">
                <span><i className="bi bi-sun"></i></span>
                <span><i className="bi bi-moon"></i></span>
            </button>
        </div>
    );
}

export default ColorButton;