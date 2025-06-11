// Exemplo de método estático em JavaScript
// Classe Person representa uma pessoa
class Person{

    // hands é um atributo estático, pertence à classe e não às instâncias
    static hands = 2;
    // age é um atributo de instância, cada pessoa pode ter uma idade diferente
    age = 0;

    // O construtor recebe o nome da pessoa
    constructor(name){
        this.name = name // Atribui o nome à instância
    }

    // Método que exibe uma mensagem de apresentação
    sayHi(){
        // Usa o atributo estático Person.hands para mostrar o número de mãos
        console.log(`Oi, eu sou ${this.name} e tenho ${Person.hands} maos`)
    }
}

// Cria duas instâncias da classe Person
let p1 = new Person("ABCD")
let p2 = new Person("Abril")
// Chama o método sayHi para cada instância
p1.sayHi()
p2.sayHi()
