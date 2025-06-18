
/**
 * Exemplo de Desestruturação de Objetos em JavaScript
 * 
 * Este código demonstra como criar um objeto com dados de uma pessoa
 * e como extrair suas propriedades usando desestruturação.
 */

// Objeto pessoa com dados pessoais e redes sociais
const pessoa = {
    nome: "João",
    sobrenome: "Silva", 
    idade: 20,
    cidade: "São Paulo",
    social: {
        facebook: "joao.silva",
        instagram: "joao.silva", 
        twitter: "joao.silva"
    },
    // Método para retornar nome completo
    nomeCompleto() {
        return `${this.nome} ${this.sobrenome}`;
    }
};

// Acessando propriedades do objeto de forma tradicional
console.log("Nome completo:", pessoa.nomeCompleto());
console.log("Facebook:", pessoa.social.facebook);

// DESESTRUTURAÇÃO DO OBJETO
// Extraindo propriedades do objeto principal
const {
    nome,           // Extrai pessoa.nome
    sobrenome,      // Extrai pessoa.sobrenome  
    idade,          // Extrai pessoa.idade
    cidade,         // Extrai pessoa.cidade
    social: {       // Desestrutura o objeto social
        facebook,   // Extrai pessoa.social.facebook
        instagram,  // Extrai pessoa.social.instagram
        twitter     // Extrai pessoa.social.twitter
    }
} = pessoa;

// Exibindo as variáveis extraídas
console.log("\n=== Dados extraídos via desestruturação ===");
console.log("Nome:", nome);
console.log("Sobrenome:", sobrenome);
console.log("Idade:", idade);
console.log("Cidade:", cidade);
console.log("Redes sociais:", {facebook, instagram, twitter});
