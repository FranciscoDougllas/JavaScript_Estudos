//Metodos em Arrays

let frutas = [
    'Maçã',
    'Banana',
    'Laranja',
    'Uva',
    'Pera'
];

// Adicionando um elemento ao final do array
frutas.push('Manga');

// Adicionando um elemento ao início do array
frutas.unshift('Abacaxi');

// Removendo o último elemento do array
frutas.pop();

// Removendo o primeiro elemento do array
frutas.shift();

// Verificando se um elemento está no array
console.log(frutas.includes('Banana')); // true

// Encontrando o índice de um elemento
console.log(frutas.indexOf('Laranja')); // 2

// Ordenando o array
frutas.sort();

// Invertendo a ordem do array
frutas.reverse();

// Filtrando elementos do array
let frutasComA = frutas.filter(fruta => fruta.includes('a') || fruta.includes('A'));

// Transformando o array em uma string
let frutasString = frutas.join(', ');

// Dividindo uma string em um array
let frutasArray = frutasString.split(', ');

// Iterando sobre os elementos do array
frutas.forEach((fruta, index) => {
    console.log(`${index}: ${fruta}`);
});