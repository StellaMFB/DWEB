function funcao1()
{
    let maior;

    let num1 = prompt("Digite o primeiro número", "");
    let num2 = prompt("Digite o segundo número", "");
    let num3 = prompt("Digite o terceiro número", "");

    maior = Math.max(num1, num2);
    maior = Math.max(maior, num3);

    alert(maior);
}

function funcao2()
{
    let array = [];
    let i, j, temp;

    array[0] = prompt("Digite o primeiro número", "");
    array[1] = prompt("Digite o segundo número", "");
    array[2] = prompt("Digite o terceiro número", "");

    for (i = 0; i < 3; i++)
        for (j = 0; j < 2; j++)
            if (array[j] > array[j+1])
            {
                temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }

    alert(array);
}

function funcao3()
{
    let palavra = prompt("Digite uma palavra", "");
    let palavraCopy = palavra.split("").reverse().join("");
    if (palavra === palavraCopy)
        alert("é palíndromo");
    else
        alert("não é palíndromo");
}

function funcao4()
{
    let string1 = prompt("Digite uma palavra", "");
    let string2 = prompt("Digite outra palavra", "");

    if (string1 === undefined || string1 === "" || string2 === undefined || string2 === "")
        alert("erro");
    else if (string1.includes(string2))
        alert("é um subconjunto");
    else 
        alert("não é um subconjunto");
}

function funcao5()
{
    let temp = prompt("Digite uma data (AAAA-MM-DD)");
    const data = new Date(temp);
    alert(data.getUTCDate());
}