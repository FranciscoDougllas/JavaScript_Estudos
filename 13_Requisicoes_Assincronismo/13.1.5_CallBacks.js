/*
Callbacks em JavaScript

Callbacks são funções que são passadas como argumentos para outras funções e são executadas 
após a conclusão de uma operação assíncrona ou em um momento específico.

Características principais:
- Funções passadas como parâmetros
- Executadas após operações assíncronas
- Permitem programação não-bloqueante
- Podem causar "callback hell" se mal utilizados
*/

console.log("=== CALLBACKS EM JAVASCRIPT ===\n");

// Exemplo 1: Callback básico
console.log("1. Callback básico:");
function saudacao(nome, callback) {
    console.log(`Olá, ${nome}!`);
    callback();
}

function despedida() {
    console.log("Até logo!");
}

saudacao("João", despedida);
console.log();




// Exemplo 2: Callback com parâmetros
console.log("2. Callback com parâmetros:");
function calcular(a, b, operacao) {
    const resultado = operacao(a, b);
    console.log(`Resultado: ${resultado}`);
}

function somar(x, y) {
    return x + y;
}

function multiplicar(x, y) {
    return x * y;
}

calcular(5, 3, somar);
calcular(5, 3, multiplicar);
console.log();



// Exemplo 3: Callback anônimo (função inline)
console.log("3. Callback anônimo:");
function processarArray(array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i], i);
    }
}

const numeros = [1, 2, 3, 4, 5];

processarArray(numeros, function(item, indice) {
    console.log(`Item ${indice}: ${item * 2}`);
});
console.log();



// Exemplo 4: Callback com setTimeout (assíncrono)
console.log("4. Callback assíncrono com setTimeout:");
console.log("Iniciando operação assíncrona...");

setTimeout(function() {
    console.log("Operação assíncrona concluída após 2 segundos!");
}, 2000);

console.log("Esta linha executa imediatamente");
console.log();



// Exemplo 5: Callback com operações de array
console.log("5. Callbacks com métodos de array:");
const pessoas = [
    { nome: "Ana", idade: 25 },
    { nome: "Carlos", idade: 30 },
    { nome: "Maria", idade: 28 }
];

// forEach
console.log("Usando forEach:");
pessoas.forEach(function(pessoa, indice) {
    console.log(`${indice + 1}. ${pessoa.nome} tem ${pessoa.idade} anos`);
});

// map
console.log("\nUsando map:");
const idades = pessoas.map(function(pessoa) {
    return pessoa.idade;
});
console.log("Idades:", idades);

// filter
console.log("\nUsando filter:");
const adultos = pessoas.filter(function(pessoa) {
    return pessoa.idade >= 18;
});
console.log("Adultos:", adultos);
console.log();



// Exemplo 6: Callback com tratamento de erro
console.log("6. Callback com tratamento de erro:");
function buscarUsuario(id, sucesso, erro) {
    // Simula uma busca em banco de dados
    setTimeout(function() {
        if (id > 0 && id <= 3) {
            const usuario = {
                id: id,
                nome: `Usuário ${id}`,
                email: `usuario${id}@email.com`
            };
            sucesso(usuario);
        } else {
            erro("Usuário não encontrado");
        }
    }, 1000);
}

buscarUsuario(1, 
    function(usuario) {
        console.log("Usuário encontrado:", usuario);
    },
    function(erro) {
        console.log("Erro:", erro);
    }
);

buscarUsuario(999, 
    function(usuario) {
        console.log("Usuário encontrado:", usuario);
    },
    function(erro) {
        console.log("Erro:", erro);
    }
);
console.log();



// Exemplo 7: Callback Hell (problema comum)
console.log("7. Callback Hell (exemplo do problema):");
function operacao1(callback) {
    setTimeout(function() {
        console.log("Operação 1 concluída");
        callback();
    }, 1000);
}

function operacao2(callback) {
    setTimeout(function() {
        console.log("Operação 2 concluída");
        callback();
    }, 1000);
}

function operacao3(callback) {
    setTimeout(function() {
        console.log("Operação 3 concluída");
        callback();
    }, 1000);
}

// Callback Hell - código difícil de ler e manter
operacao1(function() {
    operacao2(function() {
        operacao3(function() {
            console.log("Todas as operações concluídas!");
        });
    });
});
console.log();



// Exemplo 8: Arrow Functions como callbacks
console.log("8. Arrow Functions como callbacks:");
const produtos = [
    { nome: "Notebook", preco: 2500 },
    { nome: "Mouse", preco: 50 },
    { nome: "Teclado", preco: 100 }
];

// Usando arrow functions
const precos = produtos.map(produto => produto.preco);
const produtosCaros = produtos.filter(produto => produto.preco > 100);

console.log("Preços:", precos);
console.log("Produtos caros:", produtosCaros);
console.log();



// Exemplo 9: Callback com contexto (this)
console.log("9. Callback com contexto:");
const calculadora = {
    valor: 0,
    somar: function(numero) {
        this.valor += numero;
        console.log(`Valor atual: ${this.valor}`);
    },
    executarComDelay: function(numero, delay) {
        setTimeout(function() {
            this.somar(numero); // 'this' não funciona aqui
        }.bind(this), delay);
    },
    executarComArrow: function(numero, delay) {
        setTimeout(() => {
            this.somar(numero); // 'this' funciona com arrow function
        }, delay);
    }
};

calculadora.somar(10);
calculadora.executarComDelay(5, 1000);
calculadora.executarComArrow(3, 2000);
console.log();

console.log("=== VANTAGENS DOS CALLBACKS ===");
console.log("1. Permitem programação assíncrona");
console.log("2. Evitam bloqueio da thread principal");
console.log("3. São fundamentais para eventos e timers");
console.log("4. Permitem reutilização de código");
console.log();

console.log("=== DESVANTAGENS DOS CALLBACKS ===");
console.log("1. Callback Hell (código aninhado demais)");
console.log("2. Difícil tratamento de erros");
console.log("3. Código pode ficar confuso");
console.log("4. Problemas com 'this' em alguns contextos");
console.log();

console.log("=== SOLUÇÕES MODERNAS ===");
console.log("1. Promises (ES6)");
console.log("2. async/await (ES7)");
console.log("3. Generators");
console.log("4. Observables");
