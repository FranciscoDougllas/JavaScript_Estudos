// Exemplos de diferentes formas de utilizar o for em JavaScript

// 1. For clássico (com incremento)
for (let i = 0; i < 5; i++) {
    console.log(`For clássico - Valor de i: ${i}`);
}
// Explicação: Começa em 0, vai até 4, incrementando 1 a cada volta.

// 2. For com decremento
for (let i = 5; i > 0; i--) {
    console.log(`For com decremento - Valor de i: ${i}`);
}
// Explicação: Começa em 5, vai até 1, decrementando 1 a cada volta.

// 3. For com incremento diferente de 1
for (let i = 0; i <= 10; i += 2) {
    console.log(`For com incremento de 2 - Valor de i: ${i}`);
}
// Explicação: Começa em 0, vai até 10, incrementando de 2 em 2.

// 4. For em arrays usando índice
let frutas = ['maçã', 'banana', 'laranja'];
for (let i = 0; i < frutas.length; i++) {
    console.log(`For em array - Fruta: ${frutas[i]}`);
}
// Explicação: Percorre o array frutas usando o índice.

// 5. For...in (para índices/propriedades)
for (let indice in frutas) {
    console.log(`For...in - Índice: ${indice}, Fruta: ${frutas[indice]}`);
}
// Explicação: Percorre os índices do array (ou propriedades de um objeto).

// 6. For...of (para valores)
for (let fruta of frutas) {
    console.log(`For...of - Fruta: ${fruta}`);
}
// Explicação: Percorre diretamente os valores do array.


for(let row = 0; row < 10; row++){
    for(let column = 0; column < 10; column++){
        console.log(`Linha ${row} - Coluna ${column}`);
    }
}