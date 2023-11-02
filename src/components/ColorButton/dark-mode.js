function mode(isDarkMode) {
    const btnSwitch = document.querySelector('#switch');
    const nav = document.getElementById("inicio");
    const hero = document.getElementById("sec-hero");
    const mi = document.getElementById("section-sobre-mi");
    const exp = document.getElementById("section-exp");
    const sec_proy = document.getElementById("section-proyectos");
    const proy = document.getElementById("proyecto");
    const cont = document.getElementById("section-contacto");
    const foot = document.getElementById("final");
    const up = document.getElementById("up-div");
    if (isDarkMode) {
        nav?.classList.add("nav-dark");
        hero?.classList.add("hero-dark");
        mi?.classList.add("mi-dark");
        exp?.classList.add("exp-dark");
        sec_proy?.classList.add("sec-proy-dark");
        sec_proy?.classList.add("proyecto-dark");
        cont?.classList.add("cont-dark");
        foot?.classList.add("foot-dark");
        up?.classList.add("up-dark");
        localStorage.setItem("darkMode",true);
        btnSwitch?.classList.add("active");
    }
    else {
        nav?.classList.remove("nav-dark");
        hero?.classList.remove("hero-dark");
        mi?.classList.remove("mi-dark");
        exp?.classList.remove("exp-dark");
        sec_proy?.classList.remove("sec-proy-dark");
        proy?.classList.remove("proyecto-dark");
        cont?.classList.remove("cont-dark");
        foot?.classList.remove("foot-dark");
        up?.classList.remove("up-dark");
        localStorage.setItem("darkMode",false);
        btnSwitch?.classList.remove("active");
    }
    
}

export default mode;