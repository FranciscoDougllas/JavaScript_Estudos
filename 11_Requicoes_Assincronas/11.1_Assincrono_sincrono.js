// Exemplo e explicação sobre Síncrono e Assíncrono em JavaScript

// Código SÍNCRONO: as instruções são executadas uma após a outra, bloqueando o fluxo até terminar.
console.log("Início do código síncrono");

function tarefaSincrona() {
    for (let i = 0; i < 3; i++) {
        console.log(`Síncrono: passo ${i + 1}`);
    }
}

tarefaSincrona();

console.log("Fim do código síncrono");

// ------------------------------------------------------------

// Código ASSÍNCRONO: permite que certas tarefas sejam executadas em segundo plano, sem bloquear o fluxo principal.
console.log("\nInício do código assíncrono");

function tarefaAssincrona() {
    setTimeout(() => {
        console.log("Assíncrono: tarefa finalizada após 2 segundos");
    }, 2000);
}

tarefaAssincrona();

console.log("Fim do código assíncrono (mas a tarefa assíncrona ainda está rodando)");

// ------------------------------------------------------------

// Explicação:
/*
Síncrono: Cada linha de código é executada em sequência. O JavaScript espera uma tarefa terminar para começar a próxima.
Assíncrono: Algumas funções (como setTimeout, fetch, etc.) permitem que o código continue executando enquanto uma tarefa é realizada em segundo plano.
Isso é útil, por exemplo, para requisições a servidores, leitura de arquivos, timers, etc., sem travar a interface do usuário.
*/
