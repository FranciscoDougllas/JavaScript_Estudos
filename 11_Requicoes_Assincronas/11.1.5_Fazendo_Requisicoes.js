// Função que será chamada quando o botão for clicado
function clicou() {
    // Faz uma requisição GET para a API de posts do JSONPlaceholder
    fetch('https://jsonplaceholder.typicode.com/posts')
    
        // Quando a resposta chegar, converte para JSON
        .then((response) => {
            return response.json();
        })
        // Quando os dados em JSON estiverem prontos, executa esta função
        .then((json) => {
            // Mostra um alerta com o título do primeiro post retornado pela API
            alert(`Titulo do Primeiro Post: ${json[0].title}`);
        });
}

// Adiciona um ouvinte de evento ao botão com id "botao"
// Quando o botão for clicado, executa a função clicou
document.querySelector("#botao").addEventListener("click", clicou);