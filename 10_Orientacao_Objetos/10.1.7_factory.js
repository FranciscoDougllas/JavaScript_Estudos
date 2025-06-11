// Exemplo de uso do padrão Factory em JavaScript

// Classe que representa uma pessoa
class Person{
    // Propriedade de idade inicializada com 0
    age = 0;

    // O construtor recebe o nome da pessoa
    constructor(name){
        this.name = name;
    }
}

// Função Factory que cria e retorna um novo objeto Person
function createPerson(name, age){
    // Cria uma nova pessoa com o nome informado
    let p = new Person(name);
    // Define a idade da pessoa
    p.age = age;
    // Retorna o objeto criado
    return p;
}

// Cria uma nova pessoa usando a função factory
let p1  = createPerson("Maria", 40);
// Exibe o objeto completo no console
console.log(p1);
// Exibe uma mensagem formatada com nome e idade
console.log(`${p1.name} tem ${p1.age} anos`)