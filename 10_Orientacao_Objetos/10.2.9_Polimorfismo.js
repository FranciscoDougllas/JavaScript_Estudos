// Exemplo de Polimorfismo em JavaScript

// Polimorfismo é a capacidade de diferentes classes implementarem métodos com o mesmo nome, mas comportamentos diferentes.

// Classe base Animal
class Animal {
    constructor(nome) {
        this.nome = nome;
    }

    // Método que será sobrescrito pelas subclasses
    emitirSom() {
        console.log(`${this.nome} faz um som genérico.`);
    }
}

// Subclasse Cachorro
class Cachorro extends Animal {
    emitirSom() {
        console.log(`${this.nome} late: Au Au!`);
    }
}

// Subclasse Gato
class Gato extends Animal {
    emitirSom() {
        console.log(`${this.nome} mia: Miau!`);
    }
}

// Subclasse Vaca
class Vaca extends Animal {
    emitirSom() {
        console.log(`${this.nome} muge: Muu!`);
    }
}

// Criando uma lista de animais
const animais = [
    new Cachorro("Rex"),
    new Gato("Mimi"),
    new Vaca("Mimosa"),
    new Animal("AnimalGenérico")
];

// Usando polimorfismo: todos têm o método emitirSom, mas cada um se comporta de forma diferente
for (const animal of animais) {
    animal.emitirSom();
}

/*
Explicação:
- A palavra-chave 'class' é usada para criar classes em JavaScript, que são moldes para criar objetos.
- O polimorfismo permite que métodos com o mesmo nome ('emitirSom') tenham comportamentos diferentes dependendo da classe do objeto.
- No exemplo acima, ao chamar 'emitirSom' para cada animal, o método correspondente à classe real do objeto é executado.
*/
