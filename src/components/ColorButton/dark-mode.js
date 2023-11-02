function mode(flag = false) {
    const btnSwitch = document.querySelector('#switch');
    if (btnSwitch !== null) btnSwitch.classList.toggle("active");
    let isDarkMode = false;

    let nav = document.getElementById("inicio");
    let hero = document.getElementById("sec-hero");
    let mi = document.getElementById("section-sobre-mi");
    let exp = document.getElementById("section-exp");
    let sec_proy = document.getElementById("section-proyectos");
    let proy = document.getElementById("proyecto");
    let cont = document.getElementById("section-contacto");
    let foot = document.getElementById("final");
    let up = document.getElementById("up-div");

    if (nav !== null) {
        if (nav.classList.contains("nav-dark")) {
            nav.classList.remove("nav-dark");
            hero.classList.remove("hero-dark");
            mi.classList.remove("mi-dark");
            exp.classList.remove("exp-dark");
            sec_proy.classList.remove("sec-proy-dark");
            proy.classList.remove("proyecto-dark");
            cont.classList.remove("cont-dark");
            foot.classList.remove("foot-dark");
            up.classList.remove("up-dark");
        }
        else {
            nav.classList.add("nav-dark");
            hero.classList.add("hero-dark");
            mi.classList.add("mi-dark");
            exp.classList.add("exp-dark");
            sec_proy.classList.add("sec-proy-dark");
            sec_proy.classList.add("proyecto-dark");
            cont.classList.add("cont-dark");
            foot.classList.add("foot-dark");
            up.classList.add("up-dark");
            isDarkMode = true;
        }
        localStorage.setItem("darkMode", JSON.stringify(isDarkMode));
    }
}

export default mode;