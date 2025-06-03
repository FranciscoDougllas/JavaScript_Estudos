const resultado = document.querySelector(".resultado");
const saida = document.querySelector(".saida");

resultado.addEventListener("click", () => {
    const numero = parseInt(document.querySelector("#numero").value);
    for(let i = 1; i <=10; i++){
        const tabuada = numero * i;
        saida.innerHTML += `<p>${numero} x ${i} = ${tabuada}</p>`;
    }
    saida.innerHTML += `<p>Tabuada do ${numero} concluída!</p>`;
    document.querySelector("#numero").value = ""; // Limpa o campo de entrada

})

//Verifica o Palindromo
const btnPalindromo = document.querySelector(".btn-palindromo");
const resultadoPalindromo = document.querySelector(".saida-palindromo");

btnPalindromo.addEventListener("click", () => {
    const palavra = document.querySelector("#palindromo").value;
    resultadoPalindromo.innerHTML = palavra;

    resultadoPalindromo.innerHTML += `<p>Verificando se "${palavra}" é um palíndromo:</p>`;
});
