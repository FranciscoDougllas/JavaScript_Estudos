// API utilizada: https://jsonplaceholder.typicode.com/posts

/**
 * Função assíncrona que faz uma requisição GET para buscar posts
 * e exibe o título do primeiro post encontrado
 */
async function clicou() {
    try {
        // Faz a requisição GET para a API
        let req = await fetch('https://jsonplaceholder.typicode.com/posts');
        // Converte a resposta para JSON
        let json = await req.json();
        // Exibe o título do primeiro post
        alert(`Titulo do Primeiro Post: ${json[0].title}`);
        alert('Clicou com sucesso');
    } catch (error) {
        alert(`Erro na requisição: ${error}`);
    }
}

/**
 * Função assíncrona que faz uma requisição POST para criar um novo post
 * e exibe uma mensagem de sucesso com o título do post criado
 */
async function inserir(){
    try {
        // Faz a requisição POST para a API com os dados do novo post
        let req = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: "Novo Post",
                body: "Conteúdo do novo post",
                userId: 1
            })
        });
        // Converte a resposta para JSON
        let json = await req.json();
        // Exibe mensagem de sucesso com o título do post criado
        alert(`Post inserido com sucesso: ${json.title}`);
    } catch (error) {
        alert(`Erro ao inserir post: ${error}`);
    }
}

// Adiciona os event listeners aos botões
document.querySelector('#botao').addEventListener('click', clicou);
document.querySelector('#inserir').addEventListener('click', inserir);