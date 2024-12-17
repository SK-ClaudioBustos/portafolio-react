function mode(darkMode: boolean): void {
    const body = document.body;

    if (darkMode) {
        body.classList.add("dark");
    } else {
        body.classList.remove("dark");
    }
}

export default mode;