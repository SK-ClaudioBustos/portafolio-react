import { useEffect } from "react";
import "./UpButton.css";

function UpButton(): JSX.Element {
    useEffect(() => {
        window.onscroll = function () {
            const alturaPagina = window.scrollY;
            const upDiv = document.getElementById("up-div");
            if (alturaPagina >= 200) {
                if (upDiv) {
                    upDiv.style.display = 'flex';
                    upDiv.style.alignItems = "center";
                    upDiv.style.justifyContent = "center";
                }
            } else {
                if (upDiv) upDiv.style.display = "none";
            }
        };

        const scrollUpButton = document.getElementById("up-div");

        scrollUpButton?.addEventListener('click', () => {
            window.scrollTo({
              top: 0,
              behavior: 'smooth'
            });
          });
    }, []);

    return (
        <div id="up-div" className="up-div">
            <i className="up-icon bi bi-arrow-up"></i>
        </div>
    );
}

export default UpButton;