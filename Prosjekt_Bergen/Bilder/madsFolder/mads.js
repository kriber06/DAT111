function tilfeldigFarge() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
}
function nyGradient() {
    let farge1 = tilfeldigFarge();
    let farge2 = tilfeldigFarge();
    let farge3 = tilfeldigFarge();

    document.body.style.background =
        `linear-gradient(45deg, ${farge1}, ${farge2}, ${farge3})`;
}