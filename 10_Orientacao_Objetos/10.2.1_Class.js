//Classes em JavaScr
// Exemplo de uso de classes em JavaScript

// Uma classe representa um "molde" para criar objetos com propriedades e métodos.
class Animal {
    constructor(nome, tipo) {
        this.nome = nome;
        this.tipo = tipo;
    }

    // Método da classe
    descrever() {
        return `${this.nome} é um ${this.tipo}.`;
    }
}

// Criando instâncias (objetos) da classe Animal
const cachorro = new Animal("Rex", "cachorro");
const gato = new Animal("Mimi", "gato");

// Usando o método da classe
console.log(cachorro.descrever()); // Rex é um cachorro.
console.log(gato.descrever());     // Mimi é um gato.

/*
Explicação:
- A palavra-chave 'class' define uma nova classe.
- O método 'constructor' é chamado automaticamente quando criamos um novo objeto.
- 'this' faz referência ao objeto criado.
- Podemos criar quantos objetos quisermos a partir da classe.
- Métodos definidos dentro da classe podem ser usados por todos os objetos criados.
*/
