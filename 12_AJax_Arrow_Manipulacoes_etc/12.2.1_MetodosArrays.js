let lista = ['Manga', 'Uva', 'Banana', 'Pera', 'Maçã', 'Laranja', 'Pera', 'Maçã', 'Laranja'];

//Metodo toString - Converte um array em uma string
console.log(lista.toString());

//Metodo join - Converte um array em uma string
console.log(lista.join(' - '));

//Metodo push - Adiciona um elemento ao final do array
console.log(lista.push('Melancia'));

//Metodo pop - Remove o último elemento do array
console.log(lista.pop());

//Metodo shift - Remove o primeiro elemento do array
console.log(lista.shift());

//Metodo unshift - Adiciona um elemento ao início do array
console.log(lista.unshift('Melancia'));

//Metodo splice - Remove ou adiciona elementos em um array
console.log(lista.splice(0, 2));

//Metodo slice - Retorna uma parte do array
console.log(lista.slice(0, 2));

//Metodo sort - Ordena os elementos do array
console.log(lista.sort());

//Metodo reverse - Inverte a ordem dos elementos do array
console.log(lista.reverse());

//Metodo indexOf - Retorna o índice de um elemento no array
console.log(lista.indexOf('Pera'));

//Metodo includes - Verifica se um elemento existe no array
console.log(lista.includes('Pera'));

//Metodo forEach - Executa uma função para cada elemento do array
function forEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i], i, array);
    }
}

//Metodo map - Cria um novo array com os resultados de uma função
function map(array, callback) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray.push(callback(array[i], i, array));
    }
    return newArray;
}

//Metodo filter - Cria um novo array com os elementos que passam de uma condição
function filter(array, callback) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}

//Metodo reduce - Reduz o array a um único valor
function reduce(array, callback, initialValue) {
    let accumulator = initialValue;
    for (let i = 0; i < array.length; i++) {
        accumulator = callback(accumulator, array[i], i, array);
    }
    return accumulator;
}

//Metodo concat - Concatena dois arrays
let lista2 = ['Melancia', 'Abacaxi', 'Limão', 'Tangerina', 'Cereja'];
console.log(lista.concat(lista2));


//Metodo find - Retorna o primeiro elemento que satisfaz uma condição
let lista3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(lista3.find(function(item) {
    return item > 5;
}));

//Metodo findIndex - Retorna o índice do primeiro elemento que satisfaz uma condição
console.log(lista3.findIndex(function(item) {
    return item > 5;
}));