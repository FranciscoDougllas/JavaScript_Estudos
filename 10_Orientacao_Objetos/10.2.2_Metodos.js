class Human {

    //Propriedades podem ser publicas ou privadas e definidas no constructor
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    //Metodos
    speak(){
        console.log(`${this.name} está falando.`);
    }

    eat(){
        console.log(`${this.name} está comendo.`);
    }

    drink(){
        console.log(`${this.name} está bebendo.`);
    }
}

let human = new Human("João", 20);
let human2 = new Human("Maria", 25);


//Chamando os metodos
human.speak();
human.eat();
human.drink();

human2.speak();
human2.eat();
human2.drink();

