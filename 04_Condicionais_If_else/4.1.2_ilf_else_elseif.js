let temperatura = 20;
console.log("A temperatura é: " + temperatura + "°C");

// Exemplo de if simples: executa o bloco se a condição for verdadeira
if(temperatura == 30){
    console.log("A temperatura é 30°C");
}

// Exemplo de if...else: executa um bloco se a condição for verdadeira, outro se for falsa
if(temperatura == 30){
    console.log("A temperatura é 30°C");
}else{
    console.log("A temperatura não é 30°C");
}

// Exemplo de if...else if...else: testa várias condições em sequência
if(temperatura == 30){
    console.log("A temperatura é 30°C");
}else if(temperatura == 20){
    console.log("A temperatura é 20°C");
}else{
    console.log("A temperatura não é 30°C ou 20°C");
}
