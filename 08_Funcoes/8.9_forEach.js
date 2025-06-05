//Utilizando o forEach para iterar sobre um array e aplicar uma função a cada elementos
const frutas = ['maçã', 'banana', 'laranja', 'uva'];
frutas.forEach((fruta, index) => {
    console.log(`Fruta ${index + 1}: ${fruta}`);
});