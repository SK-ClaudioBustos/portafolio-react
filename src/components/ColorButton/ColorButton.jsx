import React from "react";
import "./ColorButton.scss";
import mode from "./dark-mode.js";


function ColorButton() {
    return (
        <button onClick={() => mode()} id="switch" className="switch" >
            <span><i className="bi bi-sun"></i></span>
            <span><i className="bi bi-moon"></i></span>
        </button>
    );
}

export default ColorButton;