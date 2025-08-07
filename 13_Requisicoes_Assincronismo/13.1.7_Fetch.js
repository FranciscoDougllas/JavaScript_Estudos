/**
 * Função para buscar e exibir posts de uma API pública.
 * Utiliza async/await para facilitar a leitura e tratamento de erros.
 */
async function loadPosts() {
    try {
        // Faz a requisição para a API de posts
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        
        // Verifica se a resposta foi bem-sucedida
        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.status}`);
        }

        // Converte a resposta para JSON
        const posts = await response.json();

        // Exibe os posts no console
        console.log('Posts recebidos:', posts);

        // Exemplo: Mostra o título do primeiro post
        if (posts.length > 0) {
            console.log('Título do primeiro post:', posts[0].title);
        }
    } catch (error) {
        // Captura e exibe qualquer erro ocorrido durante a requisição
        console.error('Ocorreu um erro ao carregar os posts:', error.message);
    }
}