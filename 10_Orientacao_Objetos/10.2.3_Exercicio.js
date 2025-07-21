class Animal{
    
    constructor(nome, peso, especie){
        this.nome = nome;
        this.peso = peso;
        this.especie = especie;
    }

    comer(){
        console.log(`${this.nome} está comendo.`);
    }

    brincar(){
        console.log(`${this.nome} está brincando.`);
    }

    dormir(){
        console.log(`${this.nome} está dormindo.`);
    }

    emitirSom(){
        console.log(`${this.nome} está emitindo som.`);
    }
}

let cao = new Animal("Rex", 10, "Cachorro");
let gato = new Animal("Mimi", 5, "Gato");
let peixe = new Animal("Bob", 2, "Peixe");

console.log(cao);
console.log(gato);
console.log(peixe);

cao.comer();
gato.brincar();
peixe.dormir();