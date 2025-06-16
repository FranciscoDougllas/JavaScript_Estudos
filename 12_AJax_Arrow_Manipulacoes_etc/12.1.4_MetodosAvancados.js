// Exemplo 1: Geração de Slug para URLs
function gerarSlug(texto) {
    return texto
        .toLowerCase() // Converte para minúsculo
        .normalize('NFD') // Normaliza caracteres especiais
        .replace(/[\u0300-\u036f]/g, '') // Remove acentos
        .replace(/[^a-z0-9\s]/g, '') // Remove caracteres especiais
        .trim() // Remove espaços no início e fim
        .replace(/\s+/g, '-'); // Substitui espaços por hífen
}

console.log("Slug gerado:", gerarSlug("Título do Artigo com Acentuação!"));

// Exemplo 2: Extração de Informações
let dadosTexto = "Nome: Maria, Idade: 25, Email: maria@email.com";

function extrairInfo(texto) {
    let nome = texto.substring(texto.indexOf("Nome: ") + 6, texto.indexOf(", Idade"));
    let idade = texto.substring(texto.indexOf("Idade: ") + 7, texto.indexOf(", Email"));
    let email = texto.substring(texto.indexOf("Email: ") + 7);
    
    return {
        nome: nome.trim(),
        idade: parseInt(idade),
        email: email.trim()
    };
}

console.log("Informações extraídas:", extrairInfo(dadosTexto));

// Exemplo 3: Máscara de Cartão de Crédito
function mascaraCartao(numero) {
    // Remove espaços e traços
    numero = numero.replace(/[\s-]/g, '');
    
    // Mantém apenas os 4 últimos dígitos visíveis
    let ultimos4 = numero.slice(-4);
    let mascarado = "*".repeat(numero.length - 4) + ultimos4;
    
    // Adiciona espaços a cada 4 dígitos
    return mascarado.replace(/(.{4})/g, '$1 ').trim();
}

console.log("Cartão mascarado:", mascaraCartao("4532 7851 2345 6789")); 