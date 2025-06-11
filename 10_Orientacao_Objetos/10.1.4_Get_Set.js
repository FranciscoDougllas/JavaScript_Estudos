//Getter e Setter
// Getter e Setter são métodos especiais que permitem acessar e modificar propriedades de uma classe de forma controlada.

class Person {
    _age = 0; // Atributo privado

    // Atributo de instância
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }

    // Getter para obter o valor de age
    get age() {
        return this._age;
    }

    // Setter para definir o valor de age
    set age(newAge) {
        if (typeof newAge === 'number' && newAge >= 0) {
            this._age = newAge;
        } else {
            console.error("Idade inválida. Deve ser um número não negativo.");
        }
    }
}

let p1 = new Person("Joao", "Silva");
let p2 = new Person("Amanda", "Silva");

console.log(p1);
console.log(p2);