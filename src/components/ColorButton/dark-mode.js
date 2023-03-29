function mode() {
    const btnSwitch = document.querySelector('#switch');
    btnSwitch.classList.toggle("active");
    // BarraNav
    let nav = document.getElementById("inicio");
    if(nav.classList.contains("nav-dark")){
        nav.classList.remove("nav-dark");
    }
    else {
        nav.classList.add("nav-dark");
    }

    // SeccionHero
    let hero = document.getElementById("sec-hero");
    if(hero.classList.contains("hero-dark")){
        hero.classList.remove("hero-dark");
    }
    else {
        hero.classList.add("hero-dark");
    }

    // SeccionMi
    let mi = document.getElementById("section-sobre-mi");
    if(mi.classList.contains("mi-dark")) {
        mi.classList.remove("mi-dark");
    }
    else {
        mi.classList.add("mi-dark");
    }

    // Experiencia
    let exp = document.getElementById("section-exp");
    if(exp.classList.contains("exp-dark")){
        exp.classList.remove("exp-dark");
    }
    else {
        exp.classList.add("exp-dark");
    }

    //SectionProyectos
    let sec_proy = document.getElementById("section-proyectos"); 
    if(sec_proy.classList.contains("sec-proy-dark")){
        sec_proy.classList.remove("sec-proy-dark");
    }
    else {
        sec_proy.classList.add("sec-proy-dark");
    }

    //Proyecto
    let proy = document.getElementById("proyecto");
    if(proy.classList.contains("proyecto-dark")){
        proy.classList.remove("proyecto-dark");
    }
    else {
        sec_proy.classList.add("proyecto-dark");
    }

    //Contacto
    let cont = document.getElementById("section-contacto");
    if(cont.classList.contains("cont-dark")){
        cont.classList.remove("cont-dark");
    }
    else {
        cont.classList.add("cont-dark");
    }

    //Footer
    let foot = document.getElementById("final");
    if(foot.classList.contains("foot-dark")){
        foot.classList.remove("foot-dark");
    }
    else{
        foot.classList.add("foot-dark");
    }

    //UpButton
    let up = document.getElementById("up-div");
    if(up.classList.contains("up-dark")){
        up.classList.remove("up-dark");
    }
    else {
        up.classList.add("up-dark");
    }
}

export default mode;