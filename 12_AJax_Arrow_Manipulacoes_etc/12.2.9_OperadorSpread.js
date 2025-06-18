/**
 * Exemplo do Operador Spread em JavaScript
 * 
 * O operador spread (...) permite expandir elementos de arrays,
 * objetos e outros iteráveis em locais onde múltiplos elementos
 * são esperados.
 */

// Array original
let numeros = [1, 2, 3, 4, 5];
console.log("Array original:", numeros);

// USANDO SPREAD PARA COPIAR E EXPANDIR ARRAY
// Cria um novo array combinando o array original com novos elementos
let numeros2 = [...numeros, 6, 7, 8, 9, 10];
console.log("Array expandido:", numeros2);

// EXEMPLOS ADICIONAIS DO SPREAD OPERATOR

// 1. Copiando arrays (cria uma cópia superficial)
let copiaNumeros = [...numeros];
console.log("Cópia do array:", copiaNumeros);

// 2. Combinando múltiplos arrays
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let array3 = [7, 8, 9];
let arrayCombinado = [...array1, ...array2, ...array3];
console.log("Arrays combinados:", arrayCombinado);

// 3. Adicionando elementos no início, meio e fim
let arrayModificado = [0, ...numeros.slice(0, 2), 2.5, ...numeros.slice(2), 11];
console.log("Array modificado:", arrayModificado);

// 4. Spread com strings (cada caractere vira um elemento)
let palavra = "JavaScript";
let letras = [...palavra];
console.log("String convertida em array:", letras);

// 5. Spread em objetos (cria cópia e adiciona propriedades)
let pessoa = { nome: "João", idade: 25 };
let pessoaCompleta = { ...pessoa, cidade: "São Paulo", profissao: "Desenvolvedor" };
console.log("Objeto expandido:", pessoaCompleta);
