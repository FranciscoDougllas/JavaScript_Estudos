//Tipos de dados em JavaScript
// Em JavaScript, os tipos de dados são classificados em primitivos e não primitivos.
// Tipos primitivos: string, number, boolean, null, undefined, symbol, bigint
// Tipos não primitivos: object (inclui arrays, funções, objetos literais, etc.)

// Tipos primitivos
// String: Representa uma sequência de caracteres
let nome = "João";
console.log(nome, typeof nome); // João string

// Number: Representa números, tanto inteiros quanto de ponto flutuante
let idade = 30;
console.log(idade, typeof idade); // 30 number

// Boolean: Representa um valor lógico, verdadeiro (true) ou falso (false)
let isAtivo = true;
console.log(isAtivo, typeof isAtivo); // true boolean
// Null: Representa a ausência intencional de qualquer valor
let valorNulo = null;
console.log(valorNulo, typeof valorNulo); // null object (isso é um bug histórico do JavaScript)
// Undefined: Representa uma variável que foi declarada, mas não inicializada
let valorIndefinido;
console.log(valorIndefinido, typeof valorIndefinido); // undefined undefined

// Symbol: Representa um valor único e imutável, usado para identificar propriedades de objetos
let simbolo = Symbol("descricao");
console.log(simbolo, typeof simbolo); // Symbol(descricao) symbol

// BigInt: Representa números inteiros grandes, maiores que o limite do tipo Number
let numeroGrande = BigInt(123456789012345678901234567890);
console.log(numeroGrande, typeof numeroGrande); // 123456789012345678901234567890n bigint
