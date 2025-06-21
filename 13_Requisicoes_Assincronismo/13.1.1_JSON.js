/*
JSON (JavaScript Object Notation)

JSON é um formato de dados leve e independente de linguagem que é fácil de ler e escrever.
É amplamente usado para troca de dados entre aplicações web e APIs.

Características principais:
- Baseado em texto simples
- Estrutura hierárquica de dados
- Suporta tipos de dados básicos: string, number, boolean, null
- Suporta estruturas complexas: arrays e objetos
- Independente de linguagem de programação

Exemplos de tipos de dados JSON:

1. String: "texto"
2. Number: 42 ou 3.14
3. Boolean: true ou false
4. Null: null
5. Array: [1, 2, 3, "texto"]
6. Object: {"chave": "valor"}

Exemplo prático de JSON:
*/

// Exemplo de objeto JavaScript que pode ser convertido para JSON
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

// Convertendo objeto JavaScript para JSON (string)
const jsonString = JSON.stringify(pessoa);
console.log("JSON como string:");
console.log(jsonString);

// Convertendo JSON (string) de volta para objeto JavaScript
const objetoConvertido = JSON.parse(jsonString);
console.log("\nObjeto convertido de volta:");
console.log(objetoConvertido);

// Exemplo de JSON inválido (comentários não são permitidos em JSON)
// const jsonInvalido = {
//     "nome": "João",
//     // "idade": 30  // Comentários não são permitidos em JSON
// };

console.log("\n=== Diferenças importantes ===");
console.log("1. JSON não suporta comentários");
console.log("2. JSON não suporta funções");
console.log("3. JSON não suporta undefined");
console.log("4. JSON não suporta trailing commas");
console.log("5. JSON não suporta single quotes (apenas double quotes)");