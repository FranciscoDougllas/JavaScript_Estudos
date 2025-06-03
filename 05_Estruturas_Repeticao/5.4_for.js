//Estrutura de Repetição for
// A estrutura `for` é usada para repetir um bloco de código um número específico de vezes.

for (let i = 0; i <= 5; i ++){
    console.log(`Número atual: ${i}`);
}

for(let idade = 18; idade <= 30; idade++){
    if(idade === 21){
        console.log("Pulando a idade 21");
        continue; // Pula a iteração atual quando idade é 21
    }else if(idade === 25){
        console.log("Parando o loop na idade 25");
        break; // Interrompe o loop quando idade é 25
    }
    console.log(`Idade atual: ${idade}`);
}