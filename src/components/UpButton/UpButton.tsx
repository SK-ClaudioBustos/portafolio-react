import React from "react";
import "./UpButton.scss";

function UpButton(): JSX.Element {
    window.onscroll = function() {
        const alturaPagina = window.scrollY;
        const upDiv = document.getElementById("up-div");
        if (alturaPagina >= 200){
            if (upDiv){
                upDiv.style.display = 'flex';
                upDiv.style.alignItems = "center";
                upDiv.style.justifyContent = "center";
            }
        } else {
            if (upDiv) upDiv.style.display = "none";
        }
    };
    return (
        <div id="up-div" className="up-div">
            <i className="up-icon bi bi-arrow-up"></i>
            <a className="up-a" href="#inicio"> </a>
        </div>
    );
}

export default UpButton;