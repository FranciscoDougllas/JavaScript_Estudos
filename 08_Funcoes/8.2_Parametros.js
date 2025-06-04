// Parâmetros de funções em JavaScript
// -----------------------------------
// Parâmetros são variáveis que você define na declaração da função para receber valores quando ela é chamada.
// Eles tornam as funções mais flexíveis e reutilizáveis, pois permitem trabalhar com diferentes dados a cada chamada.

// Exemplo 1: Função com dois parâmetros
function saudacao(nome, idade) {
    console.log(`Olá, ${nome}! Você tem ${idade} anos.`);
}

saudacao("Maria", 25); // Olá, Maria! Você tem 25 anos.
saudacao("João", 40);  // Olá, João! Você tem 40 anos.

// Exemplo 2: Função com parâmetro opcional (valor padrão)
function apresentar(nome, profissao = "desconhecida") {
    console.log(`Nome: ${nome}, Profissão: ${profissao}`);
}

apresentar("Ana", "Engenheira"); // Nome: Ana, Profissão: Engenheira
apresentar("Carlos");             // Nome: Carlos, Profissão: desconhecida

// Exemplo 3: Função com vários parâmetros e retorno
function calcularMedia(n1, n2, n3) {
    return (n1 + n2 + n3) / 3;
}

let media = calcularMedia(7, 8, 9);
console.log("Média:", media); // Média: 8

// Resumindo:
// - Parâmetros são definidos na declaração da função e recebem valores na chamada.
// - Você pode definir valores padrão para parâmetros.
// - Funções podem ter quantos parâmetros forem necessários.
// - Parâmetros tornam as funções mais dinâmicas e reutilizáveis.