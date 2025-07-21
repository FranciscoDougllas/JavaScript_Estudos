// Exemplo de Orientação a Objetos em JavaScript
// Classe Person representa uma pessoa com nome, idade e quantidade de passos dados.

class Person {

    // Inicializa a idade como 0 e os passos como 0
    age = 0;
    steps = 0;

    /**
     * Construtor da classe Person
     * @param {string} name - Nome da pessoa
     */
    constructor(name) {
        this.name = name; // Define o nome da pessoa
    }

    /**
     * Método para incrementar o número de passos da pessoa
     */
    takeAStep(){
        this.steps++; // Adiciona 1 ao total de passos
    }

    /**
     * Método para definir a idade da pessoa
     * @param {number} newAge - Nova idade a ser definida
     */
    setAge(newAge){
        // Verifica se newAge é um número e se é maior ou igual a 0
        if (typeof newAge === 'number' && newAge >= 0) {
            this.age = newAge; // Atualiza a idade
        }
    }
}

// Cria duas instâncias da classe Person
let person1 = new Person("Alice");
let person2 = new Person("Bob");

console.log("-----------------------")

// Alice dá dois passos
person1.takeAStep();
person1.takeAStep();

// Define a idade de Alice para 30 anos
person1.setAge(30);

// Exibe o objeto person1 no console
console.log(person1); // Person { name: 'Alice', age: 30, steps: 2 }

// Exibe a quantidade de passos de Alice
console.log(`Passos de ${person1.name}: ${person1.steps}`); // Passos de Alice: 2
