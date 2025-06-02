//Condicionais ternarias

// As condicionais ternárias são uma forma concisa de escrever uma condição if-else. A sintaxe é:
// condição ? valor_se_verdadeiro : valor_se_falso;

let idade = 12;
let mensagem = idade >= 18 ? "Você é maior de idade." :
               idade >= 14 && idade < 18 ? "Você é um adolescente." :
               idade >= 12 && idade < 14 ? "Você é um jovem." :
               "Você é uma criança.";