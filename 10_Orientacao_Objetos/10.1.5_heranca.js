// Exemplo de herança em JavaScript
// Classe base Person representa uma pessoa
class Person {

    // age é um atributo de instância, cada pessoa pode ter uma idade diferente
    age = 0;

    // O construtor recebe o nome da pessoa
    constructor(name){
        this.name = name;
    }
}

// Classe Student herda de Person, ou seja, Student é um tipo de Person
class Student extends Person{
    
    // O construtor recebe nome e id do estudante
    constructor(name, id){
        super(name); // Chama o construtor da classe base (Person)
        this.id = id; // id é exclusivo do estudante
    }

}

// Cria uma instância de Student
let p1 = new Student("ABC", 1);
p1.age = 21; // Define a idade do estudante
// Exibe as informações do estudante no console
console.log(`${p1.name} tem ${p1.age} anos e matricula #${p1.id}`)