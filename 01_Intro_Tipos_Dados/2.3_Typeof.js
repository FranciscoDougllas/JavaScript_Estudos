// O operador typeof em JavaScript é utilizado para identificar o tipo de dado de uma variável ou valor.
// Ele retorna uma string indicando o tipo primitivo ou "object" para objetos, arrays e null (com exceção de funções, que retorna "function").

// Exemplos de uso do typeof:

let nome = "Carlos";
console.log(typeof nome); // "string"

let idade = 40;
console.log(typeof idade); // "number"

let ativo = false;
console.log(typeof ativo); // "boolean"

let valorNulo = null;
console.log(typeof valorNulo); // "object" (isso é um bug histórico do JavaScript)

let indefinido;
console.log(typeof indefinido); // "undefined"

let simbolo = Symbol("simbolo");
console.log(typeof simbolo); // "symbol"

let numeroGrande = 12345678901234567890n;
console.log(typeof numeroGrande); // "bigint"

let pessoa = { nome: "Ana", idade: 28 };
console.log(typeof pessoa); // "object"

let lista = [1, 2, 3];
console.log(typeof lista); // "object"

function saudacao() {
  return "Olá!";
}
console.log(typeof saudacao); // "function"

// Resumindo:
// typeof é útil para verificar rapidamente o tipo de uma variável ou valor em tempo de execução.
