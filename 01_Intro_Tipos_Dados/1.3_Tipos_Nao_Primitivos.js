//Tipos de dados em JavaScript
// Em JavaScript, os tipos de dados são classificados em primitivos e não primitivos.
// Tipos primitivos: string, number, boolean, null, undefined, symbol, bigint
// Tipos não primitivos: object (inclui arrays, funções, objetos literais, etc.)


// Tipos não primitivos
// Object: Representa uma coleção de propriedades e métodos
let pessoa = {
    nome: "Maria",
    idade: 25,
    isAtivo: false
};

console.log(pessoa, typeof pessoa); // { nome: 'Maria', idade: 25, isAtivo: false } object


// Array: Um tipo especial de objeto usado para armazenar listas de valores
let numeros = [1, 2, 3, 4, 5];
console.log(numeros, typeof numeros); // [ 1, 2, 3, 4, 5 ] object (arrays são objetos em JavaScript)


// Função: Um bloco de código que pode ser chamado e executado
function saudacao() {
    return "Olá, mundo!";
}
console.log(saudacao(), typeof saudacao); // Olá, mundo! function

// Data: Um objeto usado para trabalhar com datas e horas
let dataAtual = new Date();
console.log(dataAtual, typeof dataAtual); // Data atual object

// RegExp: Um objeto usado para trabalhar com expressões regulares
let regex = /abc/;
console.log(regex, typeof regex); // /abc/ object (expressões regulares são objetos em JavaScript)