// Exemplo simples de herança em JavaScript

// Classe Animal: representa um animal genérico
// Uma classe é como um molde para criar objetos com propriedades e métodos.
class Animal {
    nome = "";      // Propriedade: nome do animal
    especie = "";   // Propriedade: espécie do animal

    // O construtor é chamado quando criamos um novo objeto da classe.
    constructor(nome, especie) {
        this.nome = nome;
        this.especie = especie;
    }

    // Método: identifica o animal
    identificar() {
        console.log(`${this.nome} é um ${this.especie}`);
    }
}

// Classe Cachorro: herda de Animal usando "extends"
// "extends" permite que a classe Cachorro tenha todas as propriedades e métodos de Animal.
class Cachorro extends Animal {
    // Método específico do cachorro
    latir() {
        console.log(`${this.nome} está latindo`);
    }
}

// Exemplo de uso:
// const meuCachorro = new Cachorro("Rex", "Cachorro");
// meuCachorro.identificar(); // Rex é um Cachorro
// meuCachorro.latir();       // Rex está latindo