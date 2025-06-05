//Funcoes Anonimas
// Uma funcao anonima eh uma funcao que nao tem nome
// Ela pode ser atribuida a uma variavel ou passada como argumento para outra funcao


const soma = function(a, b){
    return a + b;
}

const resultado = soma(6, 4);
console.log(resultado); // 10

// Outra forma de criar uma funcao anonima eh usando a sintaxe de arrow function
const subtracao = (a, b) => {
    return a - b;
}

const resultadoSubtracao = subtracao(10, 5);
console.log(resultadoSubtracao); // 5

// Funcoes anonimas tambem podem ser usadas como argumentos para outras funcoes
function calcular(operacao, a, b) {
    return operacao(a, b);
}
const resultadoCalculo = calcular(soma, 3, 7);
console.log(resultadoCalculo); // 10

// Voce pode passar uma funcao anonima diretamente como argumento
const resultadoCalculo2 = calcular((a, b) => a * b, 4, 5);
console.log(resultadoCalculo2); // 20