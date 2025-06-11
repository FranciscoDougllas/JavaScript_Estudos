//Action

class Person {

    age = 0;

    // Atributo de instância
    constructor(name) {
        this.name = name;
    }

    takeAStep(){
        this.steps ++;
    }

    setAge(newAge){
        if (typeof newAge === 'number' && newAge >= 0) {
            this.age = newAge;
        }
    }
}

let person1 = new Person("Alice");
let person2 = new Person("Bob");

console.log("-----------------------")
person1.takeAStep();
person1.takeAStep();

person1.setAge(30);
console.log(person1); // Person { name: 'Alice', age: 30, steps: 2 }
console.log(`Passos de ${person1.name}: ${person1.steps}`); // Passos de Alice: 2
