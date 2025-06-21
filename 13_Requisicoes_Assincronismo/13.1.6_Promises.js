/*
Promises em JavaScript

Promises são objetos que representam a eventual conclusão (ou falha) de uma operação assíncrona.
Elas são uma solução moderna para o problema do "callback hell" e oferecem uma forma mais elegante
de lidar com operações assíncronas.

Estados de uma Promise:
- Pending (Pendente): Estado inicial
- Fulfilled (Resolvida): Operação concluída com sucesso
- Rejected (Rejeitada): Operação falhou

Métodos principais:
- .then(): Executa quando a promise é resolvida
- .catch(): Executa quando a promise é rejeitada
- .finally(): Executa sempre, independente do resultado
*/

console.log("=== PROMISES EM JAVASCRIPT ===\n");

// Exemplo 1: Promise básica
console.log("1. Promise básica:");
const minhaPromise = new Promise((resolve, reject) => {
    // Simula uma operação assíncrona
    setTimeout(() => {
        const sucesso = Math.random() > 0.5;
        
        if (sucesso) {
            resolve("Operação concluída com sucesso!");
        } else {
            reject("Operação falhou!");
        }
    }, 1000);
});

minhaPromise
    .then(resultado => {
        console.log("Sucesso:", resultado);
    })
    .catch(erro => {
        console.log("Erro:", erro);
    });
console.log();

// Exemplo 2: Promise com dados
console.log("2. Promise retornando dados:");
function buscarUsuario(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id > 0 && id <= 3) {
                const usuario = {
                    id: id,
                    nome: `Usuário ${id}`,
                    email: `usuario${id}@email.com`
                };
                resolve(usuario);
            } else {
                reject("Usuário não encontrado");
            }
        }, 1000);
    });
}

buscarUsuario(1)
    .then(usuario => {
        console.log("Usuário encontrado:", usuario);
    })
    .catch(erro => {
        console.log("Erro:", erro);
    });
console.log();

// Exemplo 3: Encadeamento de promises
console.log("3. Encadeamento de promises:");
function obterDados() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id: 1, nome: "João" });
        }, 1000);
    });
}

function processarDados(dados) {
    return new Promise((resolve) => {
        setTimeout(() => {
            dados.processado = true;
            dados.timestamp = new Date().toISOString();
            resolve(dados);
        }, 500);
    });
}

obterDados()
    .then(dados => {
        console.log("Dados obtidos:", dados);
        return processarDados(dados);
    })
    .then(dadosProcessados => {
        console.log("Dados processados:", dadosProcessados);
    })
    .catch(erro => {
        console.log("Erro:", erro);
    });
console.log();

// Exemplo 4: Promise.all() - Executar múltiplas promises
console.log("4. Promise.all() - Executar múltiplas promises:");
const promise1 = new Promise(resolve => setTimeout(() => resolve("Resultado 1"), 1000));
const promise2 = new Promise(resolve => setTimeout(() => resolve("Resultado 2"), 2000));
const promise3 = new Promise(resolve => setTimeout(() => resolve("Resultado 3"), 1500));

Promise.all([promise1, promise2, promise3])
    .then(resultados => {
        console.log("Todos os resultados:", resultados);
    })
    .catch(erro => {
        console.log("Erro:", erro);
    });
console.log();

// Exemplo 5: Promise.race() - Primeira promise a resolver
console.log("5. Promise.race() - Primeira a resolver:");
const promiseRapida = new Promise(resolve => setTimeout(() => resolve("Rápida"), 500));
const promiseLenta = new Promise(resolve => setTimeout(() => resolve("Lenta"), 2000));

Promise.race([promiseRapida, promiseLenta])
    .then(resultado => {
        console.log("Primeira a resolver:", resultado);
    });
console.log();

// Exemplo 6: Promise.allSettled() - Todas as promises (sucesso ou falha)
console.log("6. Promise.allSettled() - Todas as promises:");
const promiseSucesso = Promise.resolve("Sucesso");
const promiseFalha = Promise.reject("Falha");

Promise.allSettled([promiseSucesso, promiseFalha])
    .then(resultados => {
        console.log("Resultados:", resultados);
        resultados.forEach((resultado, index) => {
            if (resultado.status === 'fulfilled') {
                console.log(`Promise ${index + 1}: Sucesso - ${resultado.value}`);
            } else {
                console.log(`Promise ${index + 1}: Falha - ${resultado.reason}`);
            }
        });
    });
console.log();

// Exemplo 7: Tratamento de erros com .catch()
console.log("7. Tratamento de erros:");
function operacaoComErro() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const erro = Math.random() > 0.7;
            if (erro) {
                reject(new Error("Erro simulado"));
            } else {
                resolve("Operação bem-sucedida");
            }
        }, 1000);
    });
}

operacaoComErro()
    .then(resultado => {
        console.log("Resultado:", resultado);
    })
    .catch(erro => {
        console.log("Erro capturado:", erro.message);
    })
    .finally(() => {
        console.log("Operação finalizada (sucesso ou falha)");
    });
console.log();

// Exemplo 8: Promise com async/await
console.log("8. Promise com async/await:");
async function buscarEProcessarUsuario(id) {
    try {
        console.log("Buscando usuário...");
        const usuario = await buscarUsuario(id);
        console.log("Usuário encontrado:", usuario);
        
        // Simula processamento adicional
        await new Promise(resolve => setTimeout(resolve, 500));
        console.log("Usuário processado com sucesso!");
        
        return usuario;
    } catch (erro) {
        console.log("Erro na busca:", erro);
        throw erro;
    }
}

// Chamando a função async
buscarEProcessarUsuario(2);
console.log();

// Exemplo 9: Promise com timeout
console.log("9. Promise com timeout:");
function promiseComTimeout(promise, timeout) {
    return Promise.race([
        promise,
        new Promise((_, reject) => 
            setTimeout(() => reject(new Error("Timeout")), timeout)
        )
    ]);
}

const promiseLenta = new Promise(resolve => setTimeout(() => resolve("Concluída"), 3000));

promiseComTimeout(promiseLenta, 2000)
    .then(resultado => {
        console.log("Resultado:", resultado);
    })
    .catch(erro => {
        console.log("Erro:", erro.message);
    });
console.log();

// Exemplo 10: Promise.resolve() e Promise.reject()
console.log("10. Promise.resolve() e Promise.reject():");
const promiseResolvida = Promise.resolve("Valor imediato");
const promiseRejeitada = Promise.reject("Erro imediato");

promiseResolvida
    .then(valor => console.log("Promise resolvida:", valor));

promiseRejeitada
    .catch(erro => console.log("Promise rejeitada:", erro));
console.log();

console.log("=== VANTAGENS DAS PROMISES ===");
console.log("1. Evitam callback hell");
console.log("2. Tratamento de erro mais elegante");
console.log("3. Encadeamento mais limpo");
console.log("4. Melhor legibilidade do código");
console.log("5. Suporte nativo no JavaScript moderno");
console.log();

console.log("=== MÉTODOS ESTÁTICOS ===");
console.log("1. Promise.all() - Todas as promises devem resolver");
console.log("2. Promise.race() - Primeira promise a resolver");
console.log("3. Promise.allSettled() - Todas as promises (sucesso ou falha)");
console.log("4. Promise.any() - Primeira promise a resolver com sucesso");
console.log("5. Promise.resolve() - Cria promise resolvida");
console.log("6. Promise.reject() - Cria promise rejeitada");
console.log();

console.log("=== BOAS PRÁTICAS ===");
console.log("1. Sempre trate erros com .catch()");
console.log("2. Use .finally() para limpeza");
console.log("3. Evite promise hell (encadeamento excessivo)");
console.log("4. Use async/await para código mais limpo");

