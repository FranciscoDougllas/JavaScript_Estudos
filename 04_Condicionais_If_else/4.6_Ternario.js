// Exemplo de uso do operador ternário para verificar o nome e exibir uma saudação personalizada

let myName = "João";

// Se o nome for "João", exibe "Olá, João!", senão exibe "Olá, visitante!"
console.log(myName === "João" ? "Olá, João!" : "Olá, visitante!");

// Alterando o valor da variável para "Maria"
myName = "Maria";

// Novamente, verifica se o nome é "João" e exibe a mensagem correspondente
console.log(myName === "João" ? "Olá, João!" : "Olá, visitante!");

// Explicação:
// O operador ternário é uma forma resumida de escrever um if-else.
// Sintaxe: condição ? valor_se_verdadeiro : valor_se_falso;
// No exemplo acima, se myName for igual a "João", imprime "Olá, João!", caso contrário imprime "Olá, visitante!"