// Explicação sobre Request e Response em JavaScript

/*
Em JavaScript, especialmente no contexto de aplicações web, "Request" (requisição) e "Response" (resposta) são conceitos fundamentais para comunicação com servidores.

- Request: É quando o navegador (ou aplicação) envia uma solicitação para um servidor, geralmente para buscar ou enviar dados.
- Response: É a resposta que o servidor retorna após processar a requisição. Pode conter dados (como JSON, HTML, etc.), status da operação, entre outros.

No navegador, usamos APIs como fetch() para fazer requisições HTTP. O objeto retornado por fetch() é uma Promise que resolve para um objeto Response, que contém métodos para acessar o conteúdo da resposta.

Exemplo prático usando fetch:
*/

console.log("Exemplo de Request e Response usando fetch:");

fetch('https://jsonplaceholder.typicode.com/posts/1') // Fazendo uma requisição GET
    .then(response => {
        // response é um objeto Response
        console.log("Status da resposta:", response.status); // Exibe o status HTTP (ex: 200)
        return response.json(); // Converte o corpo da resposta para JSON
    })
    .then(data => {
        // data contém o conteúdo retornado pelo servidor
        console.log("Dados recebidos:", data);
    })
    .catch(error => {
        // Caso ocorra algum erro na requisição
        console.error("Erro na requisição:", error);
    });

/*
Resumo:
- Request: Enviamos uma solicitação ao servidor (ex: fetch(url)).
- Response: Recebemos uma resposta do servidor (objeto Response), que pode ser processada (ex: response.json()).
*/
