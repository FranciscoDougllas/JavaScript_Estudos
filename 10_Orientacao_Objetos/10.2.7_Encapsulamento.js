class Person{

    #name = ""; //o # é usado para encapsular uma propriedade

    constructor(name){
        this.#name = name; // define o nome da pessoa. O construtor é um metodo especial que é chamado quando um objeto é criado.
    }

    //getter - metodo para obter o valor de uma propriedade encapsulada
    get getName(){
        return this.#name;
    }

    //setter - metodo para definir o valor de uma propriedade encapsulada   
    set setName(name){
        this.#name = name;
    }
}

let person = new Person("John");
console.log(person.getName);
person.setName = "Jane";
console.log(person.getName);