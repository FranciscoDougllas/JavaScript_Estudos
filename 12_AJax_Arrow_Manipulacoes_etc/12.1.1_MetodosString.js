let nome = 'Amado Batista da Silva Cunha'

//Tamanho da string
console.log(nome.length);

//Verificar a posição de uma palavra na string
let palavra = nome.indexOf('Cunha');
console.log(palavra);

//Metodos em Strings
let novaString = 'Carro Amarelo do Motor Redondo';

//Metodo Slice - Retorna uma parte da string
console.log(novaString.slice(0, 5));
console.log(novaString.slice(-10))

//Metodo Substring - Retorna uma parte da string
console.log(novaString.substring(0, 5));
console.log(novaString.substring(-10, 15));