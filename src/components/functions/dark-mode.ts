function mode(state): void {
    const btnSwitch = document.querySelector('#switch');
    const nav = document.getElementById("inicio");
    const hero = document.getElementById("sec-hero");
    const mi = document.getElementById("section-sobre-mi");
    const skill = document.getElementById("section-skill");
    const exp = document.getElementById("section-exp");
    const secProy = document.getElementById("section-proyectos");
    const proy = document.getElementById("proyecto");
    const cont = document.getElementById("section-contacto");
    const foot = document.getElementById("final");
    const up = document.getElementById("up-div");
    if (state === "true") {
        nav?.classList.add("nav-dark");
        hero?.classList.add("hero-dark");
        mi?.classList.add("mi-dark");
        skill?.classList.add("skill-dark");
        exp?.classList.add("exp-dark");
        secProy?.classList.add("sec-proy-dark");
        secProy?.classList.add("proyecto-dark");
        cont?.classList.add("cont-dark");
        foot?.classList.add("foot-dark");
        up?.classList.add("up-dark");
        btnSwitch?.classList.add("active");
    } else {
        nav?.classList.remove("nav-dark");
        hero?.classList.remove("hero-dark");
        mi?.classList.remove("mi-dark");
        skill?.classList.remove("skill-dark");
        exp?.classList.remove("exp-dark");
        secProy?.classList.remove("sec-proy-dark");
        proy?.classList.remove("proyecto-dark");
        cont?.classList.remove("cont-dark");
        foot?.classList.remove("foot-dark");
        up?.classList.remove("up-dark");
        btnSwitch?.classList.remove("active");
    }
}

export default mode;