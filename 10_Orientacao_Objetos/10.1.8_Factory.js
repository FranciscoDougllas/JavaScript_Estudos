// ------------------------------
// Função Factory em JavaScript
// ------------------------------
// Uma função factory (fábrica) é uma função que cria e retorna um novo objeto.
// Ela é útil para gerar múltiplos objetos com a mesma estrutura, mas com valores diferentes.
// Não é necessário usar 'new' ou classes, tornando o código mais simples e reutilizável.
//
// Exemplo abaixo:
//
// function createPerson(name, lastName, age) {
//     return {
//         name: name,
//         lastName: lastName,
//         age: age
//     }
// }
//
// Cada vez que chamamos createPerson, um novo objeto pessoa é criado.
// ------------------------------

// Função factory para criar objetos pessoa
function createPerson(name, lastName, age){
    // Retorna um novo objeto com as propriedades name, lastName e age
    return {
        name,       // Nome da pessoa
        lastName,   // Sobrenome da pessoa
        age         // Idade da pessoa
    }
}

// Criando duas pessoas usando a função factory
let person1 = createPerson("Amanda", "Sobral", 90);
let person2 = createPerson("Miguel", "Adv", 23);

// Exibindo os objetos criados no console
console.log(person1);
console.log(person2);