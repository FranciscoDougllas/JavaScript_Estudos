// Type Casting (Conversão de Tipos) em JavaScript

// Em JavaScript, type casting refere-se à conversão explícita de um tipo de dado para outro.
// Existem dois tipos principais de conversão:
// 1. Conversão implícita (coerção automática feita pelo JavaScript)
// 2. Conversão explícita (feita manualmente pelo programador)

// --- Conversão Explícita ---

// Para String
let numero = 123;
let texto = String(numero); // converte número para string
console.log(texto, typeof texto); // "123" string

// Para Number
let str = "456";
let num = Number(str); // converte string para número
console.log(num, typeof num); // 456 number

// Também é possível usar parseInt e parseFloat
let valor = "3.14";
let inteiro = parseInt(valor); // 3
let decimal = parseFloat(valor); // 3.14
console.log(inteiro, typeof inteiro); // 3 number
console.log(decimal, typeof decimal); // 3.14 number

// Para Boolean
let textoVazio = "";
let textoCheio = "abc";
console.log(Boolean(textoVazio)); // false
console.log(Boolean(textoCheio)); // true

// --- Conversão Implícita ---

// O JavaScript pode converter tipos automaticamente em algumas operações:
console.log("5" * 2); // 10 (string "5" é convertida para número)
console.log("5" + 2); // "52" (número 2 é convertido para string e ocorre concatenação)
console.log(1 == "1"); // true (comparação com coerção de tipo)

// Resumindo:
// Type casting é importante para garantir que os dados estejam no formato correto para operações específicas.
// Use conversão explícita sempre que quiser garantir o tipo do valor.
