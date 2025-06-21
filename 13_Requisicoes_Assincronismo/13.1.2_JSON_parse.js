/*
JSON.parse() - Convertendo JSON para Objeto JavaScript

O método JSON.parse() converte uma string JSON válida em um objeto JavaScript.
É o método inverso do JSON.stringify().

Sintaxe:
JSON.parse(texto, reviver?)

Parâmetros:
- texto: String JSON válida a ser convertida
- reviver (opcional): Função que pode transformar os valores antes de retornar

Retorna: Objeto JavaScript correspondente ao JSON
*/

console.log("=== Exemplos de JSON.parse() ===\n");

// Exemplo 1: JSON simples
const jsonSimples = '{"nome": "Maria", "idade": 25}';
const objetoSimples = JSON.parse(jsonSimples);
console.log("1. JSON simples convertido:");
console.log(objetoSimples);
console.log("Tipo:", typeof objetoSimples);
console.log("Nome:", objetoSimples.nome);
console.log();

// Exemplo 2: JSON com array
const jsonComArray = '{"frutas": ["maçã", "banana", "laranja"], "quantidade": 3}';
const objetoComArray = JSON.parse(jsonComArray);
console.log("2. JSON com array convertido:");
console.log(objetoComArray);
console.log("Frutas:", objetoComArray.frutas);
console.log("Primeira fruta:", objetoComArray.frutas[0]);
console.log();

// Exemplo 3: JSON aninhado
const jsonAninhado = `{
    "usuario": {
        "nome": "João",
        "endereco": {
            "rua": "Rua das Flores",
            "cidade": "São Paulo"
        }
    },
    "ativo": true
}`;
const objetoAninhado = JSON.parse(jsonAninhado);
console.log("3. JSON aninhado convertido:");
console.log(objetoAninhado);
console.log("Cidade:", objetoAninhado.usuario.endereco.cidade);
console.log();

// Exemplo 4: Usando função reviver
const jsonComReviver = '{"nome": "Ana", "idade": 30, "dataNascimento": "1993-05-15"}';
const objetoComReviver = JSON.parse(jsonComReviver, function(chave, valor) {
    if (chave === 'idade') {
        return valor + ' anos';
    }
    if (chave === 'dataNascimento') {
        return new Date(valor);
    }
    return valor;
});
console.log("4. JSON com função reviver:");
console.log(objetoComReviver);
console.log("Tipo da data:", typeof objetoComReviver.dataNascimento);
console.log();

// Exemplo 5: Tratamento de erros
console.log("5. Tratamento de erros:");
try {
    const jsonInvalido = '{"nome": "João", "idade": 30,}'; // Vírgula extra
    const objetoInvalido = JSON.parse(jsonInvalido);
} catch (erro) {
    console.log("Erro ao fazer parse:", erro.message);
}

try {
    const jsonInvalido2 = '{"nome": "João", idade: 30}'; // Falta aspas
    const objetoInvalido2 = JSON.parse(jsonInvalido2);
} catch (erro) {
    console.log("Erro ao fazer parse:", erro.message);
}
console.log();

// Exemplo 6: JSON com valores especiais
const jsonEspeciais = '{"texto": "Olá\\nMundo", "numero": 42, "booleano": true, "nulo": null}';
const objetoEspeciais = JSON.parse(jsonEspeciais);
console.log("6. JSON com valores especiais:");
console.log(objetoEspeciais);
console.log("Texto com escape:", objetoEspeciais.texto);
console.log("Tipo do nulo:", typeof objetoEspeciais.nulo);
console.log();

console.log("=== Pontos importantes ===");
console.log("1. JSON.parse() só aceita strings JSON válidas");
console.log("2. A função reviver é opcional e pode transformar valores");
console.log("3. Sempre use try-catch para tratar erros de parse");
console.log("4. JSON.parse() não executa código JavaScript");
console.log("5. Valores undefined não são suportados em JSON");

