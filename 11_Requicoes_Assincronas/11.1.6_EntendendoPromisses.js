// Entendendo Promise = Promessa
function clicou() {
    // Faz uma requisição GET para a API de posts do JSONPlaceholder
    fetch('https://jsonplaceholder.typicode.com/posts')
    
        .then((response) => {
            return response.json()
        })
        .then((json) => {
            alert(`Titulo do Primeiro Post: ${json[0].title}`);
        });
    alert("OPA CLICOU");
}

document.querySelector("#botao").addEventListener("click", clicou);