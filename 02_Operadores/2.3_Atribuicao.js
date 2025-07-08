// Operadores de atribuição com exemplos práticos do dia a dia

// Atribuição simples: saldo inicial de uma conta bancária
let saldo = 1000;
console.log("Saldo inicial:", saldo); // 1000

// Atribuição com adição: recebendo um salário
let salario = 2500;
saldo += salario; // saldo = saldo + salario
console.log("Saldo após receber salário:", saldo); // 3500

// Atribuição com subtração: pagando uma conta de luz
let contaLuz = 300;
saldo -= contaLuz; // saldo = saldo - contaLuz
console.log("Saldo após pagar conta de luz:", saldo); // 3200

// Atribuição com multiplicação: dobrando o valor de um investimento
let investimento = 500;
investimento *= 2; // investimento = investimento * 2
console.log("Investimento dobrado:", investimento); // 1000

// Atribuição com divisão: dividindo o valor de uma compra entre amigos
let valorPizza = 90;
let amigos = 3;
valorPizza /= amigos; // valorPizza = valorPizza / amigos
console.log("Cada amigo paga:", valorPizza); // 30

// Atribuição com módulo: quantos ingressos sobram após distribuir igualmente
let ingressos = 17;
let pessoas = 4;
ingressos %= pessoas; // ingressos = ingressos % pessoas
console.log("Ingressos que sobram:", ingressos); // 1

// Atribuição com exponenciação: crescimento de seguidores em uma rede social (dobrando a cada mês)
let seguidores = 100;
seguidores **= 2; // seguidores = seguidores ** 2
console.log("Seguidores após dobrar duas vezes:", seguidores); // 10000

// Atribuição com concatenação: formando uma mensagem de boas-vindas
let mensagem = "Bem-vindo";
mensagem += ", João!";
console.log(mensagem); // "Bem-vindo, João!"

// Atribuição com desestruturação de arrays: separando notas de uma prova
let notas = [8.5, 7.0, 9.2];
let [nota1, nota2, nota3] = notas;
console.log("Notas:", nota1, nota2, nota3); // 8.5 7.0 9.2

// Atribuição com desestruturação de objetos: extraindo informações de um pedido
let pedido = { produto: "Notebook", preco: 3500, quantidade: 2 };
let { produto, preco, quantidade } = pedido;
console.log("Produto:", produto, "| Preço:", preco, "| Quantidade:", quantidade); // "Notebook" 3500 2
