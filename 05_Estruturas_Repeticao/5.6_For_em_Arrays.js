//Utilizando o For em Arrays

// O loop `for...in` é usado para iterar sobre as propriedades enumeráveis de um objeto, incluindo arrays.
// Ele percorre as chaves do objeto, permitindo acessar tanto os índices dos arrays quanto as propriedades dos objetos.
let frutas = ['maçã', 'banana', 'laranja'];
for (let indice in frutas) {
    console.log(`Índice: ${indice}, Fruta: ${frutas[indice]}`);
}

// O loop `for...of` é usado para iterar sobre os valores de um objeto iterável, como arrays.
// Ele percorre os valores diretamente, sem precisar acessar os índices.
for (let fruta of frutas) {
    console.log(`Fruta: ${fruta}`);
}