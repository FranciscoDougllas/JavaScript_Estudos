//Em JavaScript, existem 3 formas de declarar variáveis: var, let e const
// var: Declara uma variável que pode ser reatribuída e tem escopo global ou de função
var nome = "João";
console.log(nome, typeof nome); // João string

// let: Declara uma variável que pode ser reatribuída e tem escopo de bloco
let idade = 30;
console.log(idade, typeof idade);
// idade = 31; // Reatribuição permitida
idade = 31; // Reatribuição permitida
console.log(idade, typeof idade); // 31 number


// const: Declara uma variável que não pode ser reatribuída e tem escopo de bloco
const pi = 3.14;
console.log(pi, typeof pi); // 3.14 number
// pi = 3.14159; // Reatribuição não permitida, causaria erro
// pi = 3.14159; // Reatribuição não permitida, causaria erro