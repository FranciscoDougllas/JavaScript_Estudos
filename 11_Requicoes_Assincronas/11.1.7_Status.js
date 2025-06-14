/**
 * Manipulador de evento para requisições HTTP usando Fetch API
 * 
 * Esta função implementa uma requisição assíncrona para a API JSONPlaceholder,
 * demonstrando o uso do Fetch API e o tratamento de Promises.
 * 
 * @description
 * A função realiza uma requisição GET para obter posts e exibe o título do primeiro post.
 * Inclui tratamento de erros e logging do status da requisição.
 * 
 * @example
 * // Exemplo de uso:
 * document.querySelector("#botao").addEventListener("click", clicou);
 * 
 * @returns {void}
 * 
 * @throws {Error} Quando ocorre falha na requisição ou no processamento dos dados
 */
function clicou() {
    // Realiza requisição GET para a API de posts
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
            // Verifica e loga o status da resposta
            console.log(`Status da requisição: ${response.status}`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then((json) => {
            // Exibe o título do primeiro post obtido
            alert(`Titulo do Primeiro Post: ${json[0].title}`);
        })
        .catch((error) => {
            // Trata e exibe erros da requisição
            alert(`Erro na requisição: ${error.message}`);
        })
        .finally(() => {
            // Log de finalização da requisição
            console.log('Requisição finalizada');
        });
    
    alert("Botão clicado");
}

// Registra o evento de clique no botão
document.querySelector("#botao").addEventListener("click", clicou);