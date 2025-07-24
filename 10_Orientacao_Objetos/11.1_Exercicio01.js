// class Person{
//     construnctor(name, surname){
//         this.name = name;
//         this.surname = surname;
//     }

//     fullName(){
//         return `${this.name} ${this.surname}`;
//     }

//     getFullName(){
//         return this.fullName();
//     }
// }

// let person = new Person("John", "Doe");
// let person2 = new Person("Jane", "Smith");

// console.log(person.getFullName());
// console.log(person2.getFullName());


class Animal{
    constructor(especie, nome){
        this.especie = especie;
        this.nome = nome;
    }

    show(){
        return this.getAnimal();
    }

    getAnimal(){
        return `${this.nome} e um ${this.especie}`;
    }
}

class Dog extends Animal{

}

class Bird extends Animal{

}

const dog = new Dog("Cachorro", "Rex");