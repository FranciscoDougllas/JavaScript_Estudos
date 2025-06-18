/**
 * Exemplo dos Métodos Object.keys(), Object.values() e Object.entries() em JavaScript
 * 
 * Estes métodos permitem extrair chaves, valores e pares chave-valor de objetos,
 * retornando arrays que podem ser facilmente iterados e manipulados.
 */

// Objeto pessoa com dados pessoais
let pessoa = {
    nome: "João",
    idade: 20,
    cidade: "São Paulo",
    profissao: "Desenvolvedor",
    ativo: true
};

// OBJECT.KEYS() - Retorna um array com as chaves do objeto
console.log("=== Object.keys() ===");
console.log("Chaves do objeto:", Object.keys(pessoa));

// OBJECT.VALUES() - Retorna um array com os valores do objeto
console.log("\n=== Object.values() ===");
console.log("Valores do objeto:", Object.values(pessoa));

// OBJECT.ENTRIES() - Retorna um array de arrays, cada um contendo [chave, valor]
console.log("\n=== Object.entries() ===");
console.log("Pares chave-valor:", Object.entries(pessoa));

// EXEMPLOS PRÁTICOS DE USO

// 1. Iterando sobre as chaves
console.log("\n=== Iterando sobre chaves ===");
Object.keys(pessoa).forEach(chave => {
    console.log(`Chave: ${chave}`);
});

// 2. Iterando sobre os valores
console.log("\n=== Iterando sobre valores ===");
Object.values(pessoa).forEach(valor => {
    console.log(`Valor: ${valor}`);
});

// 3. Iterando sobre pares chave-valor
console.log("\n=== Iterando sobre pares chave-valor ===");
Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`);
});

// 4. Verificando se o objeto tem propriedades
console.log("\n=== Verificando propriedades ===");
console.log("O objeto tem propriedades?", Object.keys(pessoa).length > 0);
console.log("Número de propriedades:", Object.keys(pessoa).length);
