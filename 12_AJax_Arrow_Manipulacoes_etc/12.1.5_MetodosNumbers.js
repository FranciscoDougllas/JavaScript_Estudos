//Metodos em Numbers
let numero = 120.445;

console.log(numero.toFixed(2));

//Transformar uma string em numero
let n = '123';
console.log(Number(n));

//Metodo para verificar se o numero é inteiro
console.log(Number.isInteger(numero));

//Metodo para verificar se o numero é NaN
console.log(Number.isNaN(numero));


//Metodos ParseInt e ParseFloat
// ParseInt - Converte uma string em número inteiro
let numeroInteiro = "123.456";
console.log("ParseInt:", parseInt(numeroInteiro)); // Retorna 123

// ParseFloat - Converte uma string em número decimal
let numeroDecimal = "123.456";
console.log("ParseFloat:", parseFloat(numeroDecimal)); // Retorna 123.456

// Exemplo com diferentes formatos
console.log("ParseInt com base 2:", parseInt("1010", 2)); // Converte binário para decimal
console.log("ParseFloat com notação científica:", parseFloat("1.23e-4")); // Converte notação científica
