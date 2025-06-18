/**
 * Exemplo de Desestruturação de Arrays em JavaScript
 * 
 * Este código demonstra como extrair elementos de um array
 * usando a sintaxe de desestruturação (destructuring).
 */

// Array com nomes de pessoas
let array = ['João', 'Maria', 'Pedro', 'Ana', 'Bruno'];

// DESESTRUTURAÇÃO BÁSICA
// Extraindo todos os elementos do array
let [nome1, nome2, nome3, nome4, nome5] = array;
console.log("=== Desestruturação básica ===");
console.log("Todos os nomes:", nome1, nome2, nome3, nome4, nome5);

// DESESTRUTURAÇÃO PARCIAL
// Extraindo apenas os primeiros elementos
let [primeiro, segundo] = array;
console.log("\n=== Desestruturação parcial ===");
console.log("Primeiro:", primeiro);
console.log("Segundo:", segundo);

// PULANDO ELEMENTOS
// Usando vírgulas vazias para pular elementos
let [primeiroNome, , terceiroNome, , quintoNome] = array;
console.log("\n=== Pulando elementos ===");
console.log("Primeiro:", primeiroNome);
console.log("Terceiro:", terceiroNome);
console.log("Quinto:", quintoNome);

// DESESTRUTURAÇÃO COM REST OPERATOR
// Capturando o resto dos elementos
let [primeiroElemento, segundoElemento, ...resto] = array;
console.log("\n=== Com rest operator ===");
console.log("Primeiro:", primeiroElemento);
console.log("Segundo:", segundoElemento);
console.log("Resto dos elementos:", resto);

// DESESTRUTURAÇÃO COM VALORES PADRÃO
// Definindo valores padrão para elementos que podem não existir
let [a, b, c, d, e, f = 'Valor padrão'] = array;
console.log("\n=== Com valores padrão ===");
console.log("Elemento F (padrão):", f);

// EXEMPLO PRÁTICO - TROCA DE VALORES
console.log("\n=== Troca de valores ===");
let x = 10;
let y = 20;
console.log("Antes da troca - x:", x, "y:", y);

[x, y] = [y, x]; // Troca os valores usando desestruturação
console.log("Depois da troca - x:", x, "y:", y);
