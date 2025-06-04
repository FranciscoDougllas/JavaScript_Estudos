// Funções em JavaScript
// ---------------------
// Funções são blocos de código que podem ser reutilizados sempre que necessário.
// Elas ajudam a organizar, evitar repetição e tornar o código mais modular.
// Uma função pode receber parâmetros (valores de entrada) e retornar um valor de saída.

// Exemplo 1: Função simples sem parâmetros e sem retorno
function saudacao() {
    console.log("Olá, seja bem-vindo!");
}

saudacao(); // Chamada da função saudacao
saudacao(); // Chamada da função saudacao novamente

// Exemplo 2: Função com parâmetros e retorno
function somar(a, b) {
    return a + b; // Retorna a soma dos dois parâmetros
}

let resultado = somar(5, 3); // Chama a função passando 5 e 3 como argumentos
console.log("Resultado da soma:", resultado); // 8

// Exemplo 3: Função anônima atribuída a uma variável
const multiplicar = function(x, y) {
    return x * y;
};
console.log("Multiplicação:", multiplicar(4, 6)); // 24

// Exemplo 4: Função arrow (função de seta) - sintaxe mais curta
const dividir = (a, b) => a / b;
console.log("Divisão:", dividir(10, 2)); // 5

// Resumindo:
// - Funções podem ser declaradas de várias formas (declarativas, anônimas, arrow).
// - Podem receber parâmetros e retornar valores.
// - Facilitam a reutilização e organização do código.
// - São fundamentais para a programação em JavaScript.

