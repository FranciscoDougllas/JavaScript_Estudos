//Getter e Setter
// Getter e Setter são métodos especiais que permitem acessar e modificar propriedades de uma classe de forma controlada.

class Person {
    #age = 0; // Atributo privado

    // Atributo de instância
    constructor(name) {
        this.name = name;
    }

    // Getter para obter o valor de age
    get age() {
        return this.#age;
    }

    // Setter para definir o valor de age
    set age(newAge) {
        if (typeof newAge === 'number' && newAge >= 0) {
            this.#age = newAge;
        } else {
            console.error("Idade inválida. Deve ser um número não negativo.");
        }
    }
}