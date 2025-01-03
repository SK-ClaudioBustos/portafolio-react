import { useEffect } from "react";
import "./UpButton.css";

const scrollUpButton = document.getElementById("up-div");

export function UpButton() {
    const handleScroll = () => {
        const alturaPagina = window.scrollY;
        if (scrollUpButton && alturaPagina >= 200) {
            scrollUpButton.style.display = 'flex';
        } else {
            if (scrollUpButton) scrollUpButton.style.display = "none";
        }
    };

    const setScroll = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        scrollUpButton?.addEventListener('click', setScroll);
        return () => {
            removeEventListener('scroll', handleScroll);
            removeEventListener('click', setScroll);
        };
    }, []);

    return (
        <div id="up-div" className="up-div">
            <i className="up-icon bi bi-arrow-up"></i>
        </div>
    );
}