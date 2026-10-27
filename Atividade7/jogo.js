// Praticamente sem estilização por enquanto, porque eu perdi a paciência com o CSS

const formulario = document.querySelector("form");

formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    const select = document.querySelector("select");
    const newP = document.createElement('p');
    const resultado = document.getElementById('resultado');

    const optUsu = select.value;
    let optComp;

    let optCompInt = Math.floor(Math.random() * 10) / 3;
    console.log(optCompInt);

    if (optCompInt < 1) {
        optComp = "pedra";
    } else if (optCompInt < 2) {
        optComp = "papel";
    } else {
        optComp = "tesoura";
    }

    if (optUsu == optComp) {
        newP.textContent = "Empate";
    } else if (optUsu == "pedra" && optComp == "papel" || optUsu == "papel" && optComp == "tesoura" || optUsu == "tesoura" && optComp == "pedra") {
        newP.textContent = "O computador ganhou";
    } else {
        newP.textContent = "Você ganhou";
    }
    resultado.appendChild(newP);
});
