//Arrow functions
// Arrow functions são uma forma mais concisa de escrever funções em JavaScript. Elas não têm seu próprio contexto de `this`, o que as torna úteis em muitos casos, especialmente quando se trabalha com métodos de objetos ou callbacks.

function calcular(a, b, operacao){
    console.log(`Calculando: ${a} e ${b} com a operação: ${operacao}`);
    return operacao(a, b);
}

function somar(a, b){
    console.log(`Soma: ${a} + ${b}`);
    return a + b;
}

calcular(3, 5, somar)
console.log(calcular(3, 5, somar)); // 8

calcular(3, 7, (a, b) => {
    console.log(`Subtração: ${a} - ${b}`);
    return a - b;
})