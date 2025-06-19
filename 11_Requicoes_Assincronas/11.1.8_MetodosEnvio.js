/**
 * Métodos de Envio HTTP: GET, POST, PUT, DELETE
 * 
 * - GET: Usado para buscar dados do servidor. Não altera nada, apenas consulta.
 * - POST: Usado para criar/inserir novos dados no servidor.
 * - PUT: Usado para atualizar dados existentes no servidor.
 * - DELETE: Usado para remover dados do servidor.
 * 
 * Exemplos abaixo utilizando a API https://jsonplaceholder.typicode.com/posts
 */

// Exemplo de GET: Buscar posts
function clicou() {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: "GET" // Padrão, pode ser omitido
    })
    .then((response) => response.json())
    .then((json) => {
        alert(`Título do Primeiro Post: ${json[0].title}`);
    })
    .catch((error) => {
        alert(`Erro na requisição: ${error}`);
    });
}

// Exemplo de POST: Inserir novo post
function inserir() {
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
    .then((response) => response.json())
    .then((json) => {
        alert(`Post inserido com sucesso: ${json.title}`);
    })
    .catch((error) => {
        alert(`Erro ao inserir post: ${error}`);
    });
}

// Exemplo de PUT: Atualizar um post existente (id = 1)
function atualizar() {
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: "Título Atualizado",
            body: "Conteúdo atualizado do post",
            userId: 1
        })
    })
    .then((response) => response.json())
    .then((json) => {
        alert(`Post atualizado: ${json.title}`);
    })
    .catch((error) => {
        alert(`Erro ao atualizar post: ${error}`);
    });
}

// Exemplo de DELETE: Remover um post (id = 1)
function deletar() {
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: "DELETE"
    })
    .then((response) => {
        if (response.ok) {
            alert("Post deletado com sucesso!");
        } else {
            alert("Erro ao deletar post.");
        }
    })
    .catch((error) => {
        alert(`Erro ao deletar post: ${error}`);
    });
}

// Eventos dos botões
document.querySelector('#botao').addEventListener('click', clicou);
document.querySelector('#inserir').addEventListener('click', inserir); 

// Para testar PUT e DELETE, adicione botões com id="atualizar" e id="deletar" no HTML
document.querySelector('#atualizar')?.addEventListener('click', atualizar);
document.querySelector('#deletar')?.addEventListener('click', deletar);