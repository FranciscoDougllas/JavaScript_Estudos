// https://jsonplaceholder.typicode.com/posts

function clicou() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
            return response.json();
        })
        .then((json) => {
            alert(`Titulo do Primeiro Post: ${json[0].title}`);
        })
        .catch((error) => {
            alert(`Erro na requisição: ${error}`);
        });
}

document.querySelector('#botao').addEventListener('click', clicou);