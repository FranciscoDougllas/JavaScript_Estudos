//Objetos Globais em JavaScript

//Objetos Globais em JavaScript

// Exemplo com o objeto Math
console.log("Math.PI:", Math.PI);
console.log("Math.random():", Math.random());
console.log("Math.max(10, 20, 30):", Math.max(10, 20, 30));

// Exemplo com o objeto Date
const agora = new Date();
console.log("Data e hora atual:", agora);
console.log("Ano atual:", agora.getFullYear());

// Exemplo com o objeto Number
const num = Number("123.45");
console.log("Number('123.45'):", num);

// Exemplo com o objeto String
const texto = String(1234);
console.log("String(1234):", texto);

// Exemplo com o objeto Array
const arr = Array(1, 2, 3, 4);
console.log("Array(1, 2, 3, 4):", arr);

// Exemplo com o objeto JSON
const obj = { nome: "Maria", idade: 30 };
const json = JSON.stringify(obj);
console.log("JSON.stringify(obj):", json);
console.log("JSON.parse(json):", JSON.parse(json));

// Exemplo com o objeto global window (em navegadores)
console.log("window.innerWidth:", window.innerWidth);

// Exemplo com o objeto global console
console.log("Exemplo de uso do console.log");