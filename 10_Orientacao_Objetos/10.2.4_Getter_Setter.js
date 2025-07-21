class Person{
    #name;

    //Getter - Getter é um método que retorna o valor de uma propriedade
    get name(){
        return this.#name;
    }

    //Setter - Setter é um método que define o valor de uma propriedade
    set name(name){
        this.#name = name;
    }

    //setter - um metodo especial que define o valor de uma propriedade
    set setName(name){
        this.#name = name;
    }
}

let person1 = new Person("Maria");
console.log(person1.name);

person1.setName = "João";
console.log(person1.name);

//Alterando o nome da pessoa
person1.name = "João";
console.log(person1.name);