// Objetos em JavaScript
// ---------------------
// Objetos são estruturas de dados fundamentais em JavaScript que permitem armazenar coleções de dados e entidades mais complexas.
// Eles são compostos por pares de chave-valor, onde cada chave (ou propriedade) tem um valor associado.
// As propriedades podem ser de qualquer tipo: string, número, booleano, array, função, ou até mesmo outros objetos.

// Como criar um objeto vazio:
let objeto = {};

// Adicionando propriedades ao objeto de duas formas:
objeto.prop = "valor"; // Usando notação de ponto
objeto["prop2"] = "valor2"; // Usando notação de colchetes
console.log(objeto); // { prop: 'valor', prop2: 'valor2' }

// Adicionando mais propriedades:
objeto.vida = 100;
console.log(objeto); // { prop: 'valor', prop2: 'valor2', vida: 100 }



// Exemplo de objeto mais complexo:
const pessoa = {
    nome: "Maria",
    idade: 30,
    profissao: "Engenheira",
    saudacao: function() {
        return `Olá, meu nome é ${this.nome}!`;
    }
};

console.log(pessoa.nome); // Acessando propriedade: 'Maria'
console.log(pessoa["idade"]); // Acessando propriedade: 30
console.log(pessoa.saudacao()); // Chamando método: 'Olá, meu nome é Maria!'

// Objetos podem conter outros objetos:
const carro = {
    modelo: "Fusca",
    ano: 1976,
    proprietario: {
        nome: "João",
        idade: 45
    }
};

console.log(carro.proprietario.nome); // 'João'

// Resumindo:
// - Objetos são coleções de propriedades (chave-valor)
// - Permitem organizar e estruturar dados de forma clara
// - Podem conter métodos (funções) e outros objetos
// - São essenciais para programação orientada a objetos em JavaScript
