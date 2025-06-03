//Estrutura de Repetição While
// A estrutura de repetição while executa um bloco de código enquanto uma condição for verdadeira.

let contador = 0; // Inicializa o contador
while (contador < 5) { // Enquanto o contador for menor que 5
    console.log(`Contador: ${contador}`); // Exibe o valor do contador
    contador++; // Incrementa o contador
}

let velocidade = 80; // Inicializa a velocidade
while (velocidade > 0){
    console.log(`A velocidade é ${velocidade} km/h`); // Exibe a velocidade atual
    velocidade -= 20; // Reduz a velocidade em 20 km/h
    if (velocidade == 0) {
        velocidade = 0; // Garante que a velocidade não fique negativa
        console.log("O carro parou."); // Exibe mensagem de parada
    }else {
        console.log("Reduzindo a velocidade..."); // Exibe mensagem de redução de velocidade
    }
}