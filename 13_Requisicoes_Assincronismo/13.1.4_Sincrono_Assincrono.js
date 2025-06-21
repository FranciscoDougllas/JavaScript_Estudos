/*
Diferença entre Síncrono e Assíncrono

SÍNCRONO:
- Execução sequencial, linha por linha
- Cada operação bloqueia a execução até ser concluída
- Código mais simples de entender e debugar
- Pode causar travamentos em operações lentas

ASSÍNCRONO:
- Execução não-bloqueante
- Permite que outras operações continuem enquanto aguarda
- Usa callbacks, promises ou async/await
- Melhor performance para operações que levam tempo
*/

console.log("=== CÓDIGO SÍNCRONO ===\n");

// Exemplo 1: Operações síncronas básicas
let nome = "João";
let idade = 20;
let cidade = "São Paulo";
let profissao = "Programador";
let salario = 1000;
let status = "Ativo";
let dataNascimento = "1990-01-01";

console.log("1. Variáveis declaradas sequencialmente:");
console.log(`Nome: ${nome}`);
console.log(`Idade: ${idade}`);
console.log(`Cidade: ${cidade}`);
console.log();

// Exemplo 2: Função síncrona
function calcularSalarioAnual(salarioMensal) {
    console.log("Calculando salário anual...");
    // Simula um processamento que leva tempo
    const inicio = Date.now();
    while (Date.now() - inicio < 1000) {
        // Loop que demora 1 segundo
    }
    return salarioMensal * 12;
}

console.log("2. Função síncrona (bloqueia a execução):");
const salarioAnual = calcularSalarioAnual(salario);
console.log(`Salário anual: R$ ${salarioAnual}`);
console.log("Esta linha só executa após o cálculo terminar");
console.log();

// Exemplo 3: Array síncrono
const funcionarios = [
    { nome: "Ana", salario: 1200 },
    { nome: "Carlos", salario: 1500 },
    { nome: "Maria", salario: 1100 }
];

console.log("3. Processamento síncrono de array:");
funcionarios.forEach((func, index) => {
    console.log(`Processando funcionário ${index + 1}: ${func.nome}`);
    const salarioAnual = calcularSalarioAnual(func.salario);
    console.log(`Salário anual de ${func.nome}: R$ ${salarioAnual}`);
});
console.log("Todos os funcionários foram processados");
console.log();

console.log("=== CÓDIGO ASSÍNCRONO ===\n");

// Exemplo 4: setTimeout (assíncrono básico)
console.log("4. setTimeout (assíncrono):");
console.log("Iniciando operação assíncrona...");

setTimeout(() => {
    console.log("Operação assíncrona concluída após 2 segundos");
}, 2000);

console.log("Esta linha executa imediatamente, não espera o setTimeout");
console.log();

// Exemplo 5: Promise (assíncrono moderno)
function calcularSalarioAnualAsync(salarioMensal) {
    return new Promise((resolve) => {
        console.log("Iniciando cálculo assíncrono...");
        setTimeout(() => {
            const resultado = salarioMensal * 12;
            console.log("Cálculo concluído!");
            resolve(resultado);
        }, 1000);
    });
}

console.log("5. Promise (assíncrono):");
calcularSalarioAnualAsync(1000)
    .then(salarioAnual => {
        console.log(`Salário anual calculado: R$ ${salarioAnual}`);
    })
    .catch(erro => {
        console.log("Erro:", erro);
    });

console.log("Esta linha executa imediatamente, não espera a Promise");
console.log();

// Exemplo 6: async/await (assíncrono moderno)
async function processarFuncionariosAsync() {
    console.log("6. async/await (assíncrono):");
    console.log("Iniciando processamento assíncrono...");
    
    for (let i = 0; i < funcionarios.length; i++) {
        const func = funcionarios[i];
        console.log(`Processando ${func.nome}...`);
        
        try {
            const salarioAnual = await calcularSalarioAnualAsync(func.salario);
            console.log(`Salário anual de ${func.nome}: R$ ${salarioAnual}`);
        } catch (erro) {
            console.log(`Erro ao processar ${func.nome}:`, erro);
        }
    }
    
    console.log("Processamento assíncrono concluído!");
}

// Chamando a função assíncrona
processarFuncionariosAsync();
console.log("Esta linha executa imediatamente, não espera o async/await");
console.log();

// Exemplo 7: Comparação de performance
console.log("7. Comparação de performance:");
console.log("Síncrono: Bloqueia tudo até terminar");
console.log("Assíncrono: Permite outras operações continuarem");
console.log();

console.log("=== RESUMO ===");
console.log("SÍNCRONO:");
console.log("- Execução sequencial");
console.log("- Bloqueia a thread principal");
console.log("- Mais simples de entender");
console.log("- Pode causar travamentos");
console.log();
console.log("ASSÍNCRONO:");
console.log("- Execução não-bloqueante");
console.log("- Melhor performance");
console.log("- Usa callbacks, promises ou async/await");
console.log("- Mais complexo, mas mais eficiente");
