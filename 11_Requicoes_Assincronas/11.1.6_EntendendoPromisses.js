/**
* 
 * O que é uma Promise?
 * ---------------------
 * Uma Promise é um objeto que representa a eventual conclusão (ou falha) de uma operação assíncrona e seu valor resultante.
 * Ela pode estar em três estados:
 *   - pending (pendente): operação ainda não finalizada
 *   - fulfilled (realizada): operação concluída com sucesso
 *   - rejected (rejeitada): operação falhou
 * 
 * Métodos principais das Promises:
 *   - .then(): Define o que fazer quando a Promise for resolvida (fulfilled). Pode retornar um novo valor ou uma nova Promise.
 *   - .catch(): Define o que fazer se a Promise for rejeitada (rejected), ou seja, se ocorrer um erro.
 *   - .finally(): Executa um código após a Promise ser concluída, independentemente do resultado (sucesso ou erro).
 * 
 * Exemplo prático com Fetch API:
 *   1. fetch() retorna uma Promise que faz uma requisição HTTP.
 *   2. O primeiro .then() é chamado quando a resposta chega, convertendo-a para JSON (também retorna uma Promise).
 *   3. O segundo .then() recebe os dados convertidos e executa uma ação (exibe o título do primeiro post).
 *   4. .catch() captura qualquer erro ocorrido em qualquer etapa anterior.
 *   5. .finally() executa sempre ao final, seja com sucesso ou erro.
 */
function clicou() {
    // Inicia uma requisição GET para a API de posts
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
            // O método .json() também retorna uma Promise que resolve com os dados convertidos
            return response.json();
        })
        .then((json) => {
            // Quando a Promise anterior for resolvida, exibe o título do primeiro post
            alert(`Titulo do Primeiro Post: ${json[0].title}`);
        })
        .catch((error) => {
            // Se qualquer Promise anterior for rejeitada, executa este bloco
            alert(`Erro na requisição: ${error}`);
        })
        .finally(() => {
            // Este bloco é executado sempre, independente do sucesso ou erro
            console.log('Requisição finalizada');
        });
    
    alert("Botão clicado");
}

// Adiciona o evento de clique ao botão
document.querySelector("#botao").addEventListener("click", clicou);