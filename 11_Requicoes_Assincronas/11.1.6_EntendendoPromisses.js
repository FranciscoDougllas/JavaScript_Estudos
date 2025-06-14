/**
 * Função que é executada quando o botão é clicado
 * 
 * Esta função demonstra o uso do Fetch API para fazer requisições HTTP:
 * - fetch(): Método que retorna uma Promise para fazer requisições HTTP
 * - .then(): Encadeia ações a serem executadas quando a Promise é resolvida
 * - .catch(): Trata erros que possam ocorrer durante a requisição
 * - .finally(): Executa código independente do sucesso ou falha da requisição
 * 
 * O fluxo da requisição é:
 * 1. Faz uma requisição GET para a API JSONPlaceholder
 * 2. Converte a resposta para JSON
 * 3. Exibe o título do primeiro post
 * 4. Trata possíveis erros
 */
function clicou() {
    // Requisição GET para a API de posts
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
            // Converte a resposta para JSON
            return response.json();
        })
        .then((json) => {
            // Exibe o título do primeiro post
            alert(`Titulo do Primeiro Post: ${json[0].title}`);
        })
        .catch((error) => {
            // Trata erros da requisição
            alert(`Erro na requisição: ${error}`);
        })
        .finally(() => {
            // Executa independente do resultado
            console.log('Requisição finalizada');
        });
    
    alert("Botão clicado");
}

// Adiciona o evento de clique ao botão
document.querySelector("#botao").addEventListener("click", clicou);