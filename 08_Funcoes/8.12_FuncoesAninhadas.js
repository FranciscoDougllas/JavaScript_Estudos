// Exemplo de Funções Aninhadas em JavaScript

// Função externa
function funcaoExterna() {
    console.log("Executando a função externa");

    // Função interna (aninhada)
    function funcaoInterna() {
        console.log("Executando a função interna");
    }

    // Chamando a função interna de dentro da função externa
    funcaoInterna();
}

// Chamando a função externa, que por sua vez chama a interna
funcaoExterna();

/*
Explicação:
- Uma função aninhada é uma função definida dentro de outra função.
- A função interna (funcaoInterna) só pode ser acessada e chamada dentro da função externa (funcaoExterna).
- Quando chamamos funcaoExterna(), ela executa seu código e também chama funcaoInterna().
- Isso é útil para organizar o código e criar funções auxiliares que só fazem sentido dentro de um determinado contexto.
*/
