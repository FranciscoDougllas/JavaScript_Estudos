// Exemplo prático: Controle de estoque em um supermercado usando break e continue

// 1. Usando FOR: Procurar o primeiro produto fora de estoque (break) e pular produtos em promoção (continue)
let produtos = [
    { nome: "Arroz", estoque: 10, promocao: false },
    { nome: "Feijão", estoque: 0, promocao: false },
    { nome: "Macarrão", estoque: 5, promocao: true },
    { nome: "Açúcar", estoque: 8, promocao: false }
];

for (let i = 0; i < produtos.length; i++) {
    if (produtos[i].promocao) {
        console.log(`Produto em promoção: ${produtos[i].nome} - pulando verificação de estoque.`);
        continue; // pula produtos em promoção
    }
    if (produtos[i].estoque === 0) {
        console.log(`Produto fora de estoque encontrado: ${produtos[i].nome}. Parando a busca.`);
        break; // para ao encontrar o primeiro fora de estoque
    }
    console.log(`Produto disponível: ${produtos[i].nome} - Estoque: ${produtos[i].estoque}`);
}

console.log("------");

// 2. Usando WHILE: Verificar carrinho de compras, parar se encontrar item proibido (break) e pular itens já verificados (continue)
let carrinho = [
    { nome: "Refrigerante", verificado: false, proibido: false },
    { nome: "Cerveja", verificado: false, proibido: true },
    { nome: "Biscoito", verificado: true, proibido: false },
    { nome: "Leite", verificado: false, proibido: false }
];

let idx = 0;
while (idx < carrinho.length) {
    if (carrinho[idx].verificado) {
        idx++;
        continue; // pula itens já verificados
    }
    if (carrinho[idx].proibido) {
        console.log(`Item proibido encontrado: ${carrinho[idx].nome}. Cancelando verificação do carrinho.`);
        break; // para ao encontrar item proibido
    }
    console.log(`Item verificado: ${carrinho[idx].nome}`);
    idx++;
}

console.log("------");

// 3. Usando DO...WHILE: Conferir caixas de um depósito, parar se caixa estiver danificada (break) e pular caixas vazias (continue)
let caixas = [
    { id: 1, vazia: false, danificada: false },
    { id: 2, vazia: true, danificada: false },
    { id: 3, vazia: false, danificada: true },
    { id: 4, vazia: false, danificada: false }
];

let pos = 0;
do {
    if (caixas[pos].vazia) {
        pos++;
        continue; // pula caixas vazias
    }
    if (caixas[pos].danificada) {
        console.log(`Caixa danificada encontrada (ID: ${caixas[pos].id}). Parando conferência.`);
        break; // para ao encontrar caixa danificada
    }
    console.log(`Caixa conferida com sucesso (ID: ${caixas[pos].id})`);
    pos++;
} while (pos < caixas.length);
