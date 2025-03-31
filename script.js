function mostrarCarta() {
    let carta = document.getElementById("carta");
    carta.classList.add("mostrar");

    // Reproducir música
    let musica = document.getElementById("musica");
    musica.play();

    // Generar corazones flotantes
    setInterval(() => {
        let corazon = document.createElement("div");
        corazon.innerHTML = "❤️    💗";
        corazon.classList.add("corazon");
        corazon.style.left = Math.random() * window.innerWidth + "px";
        corazon.style.bottom = "0";
        corazon.style.fontSize = Math.random() * 20 + 30 + "px";
        document.body.appendChild(corazon);

        setTimeout(() => {
            corazon.remove();
        }, 4000);
    }, 100);
}