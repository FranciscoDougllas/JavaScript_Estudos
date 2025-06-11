//Instanciando Classes
// Para criar uma instância de uma classe, usamos a palavra-chave `new` seguida pelo nome da classe e os argumentos necessários para o construtor.
class Person {

    age = 0;

    // Atributo de instância
    constructor(name) {
        this.name = name;
    }
}

let person1 = new Person("Alice");
let person2 = new Person("Bob");
person1.age = 30;
person2.age = 25;
console.log(person1); // Person { name: 'Alice', age: 30 }
console.log(person2); // Person { name: 'Bob', age: 25 }