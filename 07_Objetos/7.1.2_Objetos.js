//Criando Acessando a Propriedades de Objetos
// Objetos em JavaScript são estruturas de dados que permitem armazenar coleções de dados e entidades mais complexas.

let personagem = {
    nome: 'Lucas',
    idade: 25,
    pais: 'Brasil',
    olhos: ['Preto', 'Verde'],
    habilidades: {
        programacao: true,
        desenho: false,
        agil: true
    },

    // this é uma referência ao próprio objeto
    // Usado para acessar propriedades e métodos do objeto dentro dele mesmo
    apresentar: function(){
        return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`;
    }
}


// Acessando propriedades do objeto
console.log(personagem.nome); // 'Lucas'
console.log(personagem['idade']); // 25
console.log(personagem.pais); // 'Brasil'
console.log(personagem.olhos[0]); // 'Preto'
console.log(personagem.habilidades.programacao); // true
console.log(personagem.habilidades.desenho); // false