const elemento1 = document.querySelector('#paragrafo');
// Seleciona o título
const titulo = document.querySelector('h1');
console.log('Título:', titulo.innerHTML);

// Seleciona todos os parágrafos (sem classe, id ou name)
const paragrafos = document.querySelectorAll('p:not([class]):not([id]):not([name])');
paragrafos.forEach((p, i) => {
    console.log(`Parágrafo de HTML (${i+1}):`, p.innerHTML);
});

// Seleciona todos os parágrafos azuis
const paragrafosAzuis = document.querySelectorAll('p.text-blue-500');
paragrafosAzuis.forEach((p, i) => {
    console.log(`Parágrafo azul (${i+1}):`, p.innerHTML);
});

// Seleciona o parágrafo vermelho
const paragrafoVermelho = document.querySelector('#paragrafo');
console.log('Parágrafo vermelho:', paragrafoVermelho.innerHTML);

// Seleciona o parágrafo verde
const paragrafoVerde = document.querySelector('p[name="outro_paragrafo"]');
console.log('Parágrafo verde:', paragrafoVerde.innerHTML);

// Seleciona o <hr>
const hr = document.querySelector('hr');
console.log('HR:', hr);

// Seleciona o container principal
const container = document.querySelector('div.flex.flex-col');
console.log('Container principal:', container);