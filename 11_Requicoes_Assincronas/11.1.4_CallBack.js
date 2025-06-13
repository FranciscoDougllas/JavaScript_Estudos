/*
O que é um Callback?

Callback é uma função passada como argumento para outra função, que será executada após algum evento ou operação assíncrona ser concluída. 
Em JavaScript, callbacks são muito usados para lidar com eventos, requisições assíncronas, timers, entre outros.

Exemplo 1: Callback em evento de clique
*/
document.querySelector("#botao").addEventListener("click", function() {
    alert("Botão clicado! (Callback em evento)");
});

/*
Exemplo 2: Callback em setTimeout (executa após 2 segundos)
*/
setTimeout(function() {
    console.log("Executou o callback após 2 segundos!");
}, 2000);

/*
Exemplo 3: Callback em função personalizada
*/
function cumprimentar(nome, callback) {
    console.log("Olá, " + nome + "!");
    callback();
}

cumprimentar("Maria", function() {
    console.log("Callback executado após cumprimentar.");
});

/*
Resumo:
- Callback é uma função chamada após outra função terminar sua execução.
- Muito útil para programação assíncrona e manipulação de eventos.
*/