//Herança em JavaScript
class Person {

    age = 0;

    constructor(name){
        this.name = name;
    }
}

class Student extends Person{
    
    constructor(name, id){
        super(name);
        this.id = id;
    }

}

let p1 = new Student("ABC", 1);
p1.age = 21;
console.log(`${p1.name} tem ${p1.age} anos e matricula #${p1.id}`)