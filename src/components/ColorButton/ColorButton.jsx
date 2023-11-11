import React from "react";
import "./ColorButton.scss";
import mode from "../functions/dark-mode.js";


function ColorButton({ isDarkMode, setIsDarkMode }) {
    const handleChange = () => {
        const state = isDarkMode === "true" ? "false" : "true";
        setIsDarkMode(state);
        localStorage.setItem("darkMode", state);
        mode(state);
    }

    return (
        <div className="d-flex justify-content-center">
            <button onClick={handleChange} id="switch" className="switch">
                <span><i className="bi bi-sun"></i></span>
                <span><i className="bi bi-moon"></i></span>
            </button>
        </div>
    );
}

export default ColorButton;