// Retorno de Funções em JavaScript
// -------------------------------
// O return é utilizado para devolver um valor ao local onde a função foi chamada.
// Após o return, a execução da função é encerrada.

// Exemplo 1: Função que retorna um valor simples
function somar(a, b) {
    return a + b; // Retorna a soma dos parâmetros
}
let resultado = somar(4, 6);
console.log("Resultado da soma:", resultado); // 10

// Exemplo 2: Função que retorna uma string
function saudacao(nome) {
    return `Olá, ${nome}!`;
}
let mensagem = saudacao("Lucas");
console.log(mensagem); // Olá, Lucas!

// Exemplo 3: Função com return condicional
function parOuImpar(numero) {
    if (numero % 2 === 0) {
        return "Par";
    } else {
        return "Ímpar";
    }
}
console.log(parOuImpar(7)); // Ímpar
console.log(parOuImpar(10)); // Par

// Exemplo 4: Função que retorna um objeto
function criarPessoa(nome, idade) {
    return {
        nome: nome,
        idade: idade
    };
}
let pessoa = criarPessoa("Ana", 28);
console.log(pessoa); // { nome: 'Ana', idade: 28 }

// Resumindo:
// - O return devolve um valor para quem chamou a função.
// - Após o return, nada mais é executado dentro da função.
// - Funções podem retornar qualquer tipo de dado: número, string, booleano, objeto, array, etc.