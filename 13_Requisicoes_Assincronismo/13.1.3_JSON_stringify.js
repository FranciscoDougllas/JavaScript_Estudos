/*
JSON.stringify() - Convertendo Objetos JavaScript para JSON

O método JSON.stringify() converte um objeto JavaScript em uma string JSON.
É o método mais comum para serializar dados JavaScript para transmissão ou armazenamento.

Sintaxe:
JSON.stringify(valor, replacer?, space?)

Parâmetros:
- valor: O valor a ser convertido para JSON
- replacer (opcional): Função ou array que controla o que é incluído
- space (opcional): String ou número para indentação

Retorna: String JSON representando o objeto
*/

console.log("=== Exemplos de JSON.stringify() ===\n");

// Exemplo 1: Conversão básica
const pessoa = {
    nome: "João Silva",
    idade: 30,
    ativo: true,
    hobbies: ["música", "esportes"],
    endereco: {
        rua: "Rua das Flores",
        cidade: "São Paulo"
    }
};

const jsonBasico = JSON.stringify(pessoa);
console.log("1. Conversão básica:");
console.log(jsonBasico);
console.log();

// Exemplo 2: Com indentação (formatação)
const jsonFormatado = JSON.stringify(pessoa, null, 2);
console.log("2. Com indentação:");
console.log(jsonFormatado);
console.log();

// Exemplo 3: Usando função replacer
const jsonComReplacer = JSON.stringify(pessoa, function(chave, valor) {
    if (chave === 'idade') {
        return valor + ' anos';
    }
    if (chave === 'ativo') {
        return valor ? 'Sim' : 'Não';
    }
    return valor;
}, 2);
console.log("3. Com função replacer:");
console.log(jsonComReplacer);
console.log();

// Exemplo 4: Usando array replacer (selecionar propriedades)
const jsonComArrayReplacer = JSON.stringify(pessoa, ['nome', 'idade', 'hobbies'], 2);
console.log("4. Com array replacer (apenas nome, idade e hobbies):");
console.log(jsonComArrayReplacer);
console.log();

// Exemplo 5: Valores especiais
const objetoEspeciais = {
    texto: "Olá\nMundo",
    numero: 42,
    booleano: true,
    nulo: null,
    indefinido: undefined,
    funcao: function() { return "teste"; },
    simbolo: Symbol('teste')
};

const jsonEspeciais = JSON.stringify(objetoEspeciais, null, 2);
console.log("5. Valores especiais:");
console.log(jsonEspeciais);
console.log("Nota: undefined, funções e símbolos são omitidos");
console.log();

// Exemplo 6: Arrays
const array = [
    { nome: "Ana", idade: 25 },
    { nome: "Carlos", idade: 35 },
    { nome: "Maria", idade: 28 }
];

const jsonArray = JSON.stringify(array, null, 2);
console.log("6. Array de objetos:");
console.log(jsonArray);
console.log();

// Exemplo 7: Tratamento de erros
console.log("7. Tratamento de erros:");
try {
    const objetoCircular = {};
    objetoCircular.prop = objetoCircular;
    const jsonCircular = JSON.stringify(objetoCircular);
} catch (erro) {
    console.log("Erro com referência circular:", erro.message);
}

try {
    const objetoComFuncao = {
        nome: "João",
        metodo: function() { return "teste"; }
    };
    const jsonComFuncao = JSON.stringify(objetoComFuncao);
    console.log("Objeto com função:", jsonComFuncao);
} catch (erro) {
    console.log("Erro:", erro.message);
}
console.log();

// Exemplo 8: Diferentes tipos de space
console.log("8. Diferentes tipos de space:");
console.log("Com tab:");
console.log(JSON.stringify(pessoa, null, '\t'));
console.log("\nCom 4 espaços:");
console.log(JSON.stringify(pessoa, null, 4));
console.log("\nCom string personalizada:");
console.log(JSON.stringify(pessoa, null, '---'));
console.log();

console.log("=== Pontos importantes ===");
console.log("1. JSON.stringify() converte objetos JavaScript para strings JSON");
console.log("2. Valores undefined, funções e símbolos são omitidos");
console.log("3. Referências circulares causam erro");
console.log("4. O parâmetro replacer pode ser função ou array");
console.log("5. O parâmetro space controla a formatação");
console.log("6. Sempre use try-catch para tratar erros");
console.log("7. JSON.stringify() é o inverso de JSON.parse()");
