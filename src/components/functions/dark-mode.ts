function mode(state: boolean): void {
    const btnSwitch = document.querySelector('#dark-mode-button');
    const body = document.body;

    if (state) {
        btnSwitch?.classList.add("active");
        body.style.backgroundColor = "#0a0a23";
        body.classList.add("dark");
    } else {
        btnSwitch?.classList.remove("active");
        body.style.backgroundColor = "#fff";
        body.classList.remove("dark");
    }
}

export default mode;