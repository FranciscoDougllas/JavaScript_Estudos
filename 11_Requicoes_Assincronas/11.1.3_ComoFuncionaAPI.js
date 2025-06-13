/*
O que é uma API?

API significa "Application Programming Interface" (Interface de Programação de Aplicações). 
Ela é um conjunto de regras e definições que permite que diferentes sistemas, aplicações ou componentes conversem entre si. 
No contexto web, uma API geralmente expõe endpoints (URLs) que aceitam requisições e retornam respostas, normalmente em formato JSON.

Como funciona uma API?

1. Uma aplicação cliente (por exemplo, um site ou app) faz uma requisição HTTP para um endpoint da API.
2. O servidor que hospeda a API processa a requisição, executa alguma lógica (como acessar um banco de dados) e retorna uma resposta.
3. O cliente recebe a resposta e pode exibir ou processar os dados.

Exemplo prático usando fetch para consumir uma API pública:

*/

// Exemplo: Buscando um usuário fictício na API JSONPlaceholder
console.log("Exemplo de requisição para uma API:");

fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(response => response.json())
    .then(usuario => {
        console.log("Usuário recebido da API:", usuario);
    })
    .catch(erro => {
        console.error("Erro ao acessar a API:", erro);
    });

/*
Resumo:
- Uma API permite integração entre sistemas.
- Usamos métodos HTTP (GET, POST, PUT, DELETE) para interagir com APIs.
- O fetch é uma forma moderna de fazer requisições a APIs em JavaScript.
*/
