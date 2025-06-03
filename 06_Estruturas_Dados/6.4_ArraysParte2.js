const carros = ['Fusca', 'Civic', 'Corolla', 'Onix', 'HB20', 'Gol', 'Palio', 'Fox', 'Argo', 'Ka'];
console.log(carros);

const frutas = ['Maçã', 'Banana', 'Laranja', 'Uva', 'Pera'];

//Concatenação de arrays
const frutasCarros = frutas.concat(carros);
console.log(frutasCarros);

//Verificando o tamanho do array
console.log(frutasCarros.length); // 20


//Substituindo elementos do array
frutasCarros[0] = 'Manga';
console.log(frutasCarros);

//Ordenando o array
frutasCarros.sort();
console.log(frutasCarros);

//Substituindo um elemento específico do array, splice substitui o elemento específico do array
frutasCarros.splice(2, 1, 'Melancia'); // substitui o elemento na posição 2 por 'Melancia'
console.log(frutasCarros);

//Interando sobre os elementos do array, forEach itera sobre os elementos do array
frutasCarros.forEach((fruta, index) => {
    console.log(`Fruta ${index + 1}: ${fruta}`);
});