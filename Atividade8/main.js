const formulario = document.querySelector("form");
let qtd = 0;
let media = 0;
let maiorIdade = 0;
let menorIdade = 120;
let qtdPessimo = 0;
let pctOBom = 0;
let mulheres = 0; 
let homens = 0;
let outros = 0;

formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    const idade = document.getElementById("idade");
    const sexo = document.getElementById("sexo");
    const opiniao = document.getElementById("opiniao");

    const idadeUsu = parseInt(idade.value, 10);
    const sexoUsu = sexo.value;
    const opiniaoUsu = opiniao.value;

    media += idadeUsu;

    if (idadeUsu > maiorIdade)
        maiorIdade = idadeUsu;
    if (idadeUsu < menorIdade)
        menorIdade = idadeUsu;
    if (opiniaoUsu == 1)
        qtdPessimo++;
    else if (opiniaoUsu == 3 || opiniaoUsu == 4)
        pctOBom++;
    if (sexoUsu == "feminino")
        mulheres++;
    else if (sexoUsu == "masculino")
        homens++;
    else
        outros++;

    qtd++;

    if (qtd == 45)
    {
        media /= qtd;
        media = parseInt(media, 10);
        pctOBom = (pctOBom * 100 / qtd).toFixed(2);
        formulario.innerHTML = "";
        document.querySelector("h2").innerHTML = "Informações das pessoas que responderam à pesquisa";
        document.querySelector("p").innerHTML = `Média idades: ${media} <br> Maior idade: ${maiorIdade} <br> Menor idade: ${menorIdade} <br> Quantidade de péssimos: ${qtdPessimo} <br> Porcentagem de bons e ótimos: ${pctOBom}% <br> Mulheres: ${mulheres} <br>
        Homens: ${homens} <br> Outros: ${outros}`;
    }
});