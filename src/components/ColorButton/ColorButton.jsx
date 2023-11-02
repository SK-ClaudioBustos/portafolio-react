import React from "react";
import "./ColorButton.scss";
import mode from "./dark-mode.js";


function ColorButton({isDarkMode,setIsDarkMode}) {
    const handleChange = () => {
        setIsDarkMode(!isDarkMode);
        mode(isDarkMode);
    } 

    return (
        <button onClick={handleChange} id="switch" className="switch" >
            <span><i className="bi bi-sun"></i></span>
            <span><i className="bi bi-moon"></i></span>
        </button>
    );
}

export default ColorButton;