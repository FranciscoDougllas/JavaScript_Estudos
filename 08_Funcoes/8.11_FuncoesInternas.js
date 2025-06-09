//Funcoes Internas funcoes que sao criadas dentro de outras funcoes
// Elas podem acessar variáveis do escopo externo e são úteis para encapsular lógica que não precisa ser exposta globalmente.

function saudacao(nome) {
    // Função interna
    function mensagem() {
        return `Olá, ${nome}!`;
    }
    
    // Retorna a função interna
    return mensagem();
}
console.log(saudacao("João")); // Saída: Olá, João!

// Exemplo com escopo
function contador() {
    let count = 0; // Variável externa

    // Função interna que incrementa o contador
    function incrementar() {
        count++;
        return count;
    }

    // Retorna a função interna
    return incrementar;
}

const meuContador = contador(); // Cria uma instância do contador
console.log(meuContador()); // Saída: 1