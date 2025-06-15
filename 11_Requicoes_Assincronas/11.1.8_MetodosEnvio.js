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

function inserir(){
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: "Novo Post",
            body: "Conteúdo do novo post",
            userId: 1
        })
    })
    .then((response) => {
        return response.json();
    })
    .then((json) => {
        alert(`Post inserido com sucesso: ${json.title}`);
    })
    .catch((error) => {
        alert(`Erro ao inserir post: ${error}`);
    });
}

document.querySelector('#botao').addEventListener('click', clicou);
document.querySelector('#inserir').addEventListener('click', inserir); 