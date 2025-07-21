class Human{

    //metodo não estatico
    talk(){
        console.log("Hello, how are you?");
    }

    //Metodo estatico
    static walk(){
        console.log("Walking...");
    }
}


let person = new Human();
person.talk();
Human.walk();