// Exemplos dos tipos de dados em JavaScript

// String
let nome = "Maria";
console.log(nome, typeof nome); // Maria string

// Number
let idade = 25;
console.log(idade, typeof idade); // 25 number

// Boolean
let aprovado = true;
console.log(aprovado, typeof aprovado); // true boolean

// Null
let valorNulo = null;
console.log(valorNulo, typeof valorNulo); // null object

// Undefined
let valorIndefinido;
console.log(valorIndefinido, typeof valorIndefinido); // undefined undefined

// Symbol
let simbolo = Symbol("id");
console.log(simbolo, typeof simbolo); // Symbol(id) symbol

// BigInt
let numeroGrande = 1234567890123456789012345678901234567890n;
console.log(numeroGrande, typeof numeroGrande); // 1234567890123456789012345678901234567890n bigint

// Object
let pessoa = { nome: "Ana", idade: 28 };
console.log(pessoa, typeof pessoa); // { nome: "Ana", idade: 28 } object

// Array (também é do tipo object)
let lista = [1, 2, 3];
console.log(lista, typeof lista); // [1, 2, 3] object

// Function (também é do tipo object, mas identificado como function)
function saudacao() {
  return "Olá!";
}
console.log(saudacao, typeof saudacao); // function function
