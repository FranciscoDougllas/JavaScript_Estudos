/**
 * API utilizada: https://jsonplaceholder.typicode.com/posts
 * Este código implementa um sistema simples de blog usando a API JSONPlaceholder
 */

// Função para ler e exibir os posts
async function readPosts() {
    try {
        const postArea = document.querySelector('.posts');
        postArea.innerHTML = 'Carregando...';

        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const json = await response.json();

        if (json.length > 0) {
            postArea.innerHTML = '';

            json.forEach(post => {
                const postHTML = `
                    <div class="post">
                        <h2>${post.title}</h2>
                        <p>${post.body}</p>
                        <hr>
                    </div>
                `;
                postArea.innerHTML += postHTML;
            });
        } else {
            postArea.innerHTML = 'Nenhum post encontrado';
        }
    } catch (error) {
        postArea.innerHTML = `Erro ao carregar posts: ${error.message}`;
    }
}

// Função para adicionar um novo post
async function addNewPost(title, body) {
    await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: title,
            body: body,
            userId: 1
        })
    });
    document.querySelector('#titleField').value = '';
    document.querySelector('#bodyField').value = '';
    readPosts();
}



// Event listener para o botão de inserção
document.querySelector('#insertButton').addEventListener('click', () => {
    let title = document.querySelector('#titleField').value;
    let body = document.querySelector('#bodyField').value;

    if (title && body) {
        addNewPost(title, body);
    } else {
        alert('Preencha todos os campos');
    }
});

// Carrega os posts ao iniciar a página
readPosts();
