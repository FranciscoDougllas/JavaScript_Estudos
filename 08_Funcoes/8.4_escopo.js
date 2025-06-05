// Escopo em Funcoes javascript

// Escopo Global: a variável pode ser acessada de qualquer lugar do código
var globalVar = "Sou global";

function exemploEscopo() {
    // Escopo de função: só existe dentro da função
    var localVar = "Sou local da função";
    console.log(globalVar); // Acessa a variável global
    console.log(localVar);  // Acessa a variável local
}

exemploEscopo();
// console.log(localVar); // Erro: localVar não está definida fora da função

if (true) {
    // Escopo de bloco (let e const): só existe dentro do bloco
    let blocoLet = "Sou let do bloco";
    const blocoConst = "Sou const do bloco";
    console.log(blocoLet);   // Ok
    console.log(blocoConst); // Ok
}
// console.log(blocoLet); // Erro: blocoLet não está definida fora do bloco

/*
Resumo:
- var tem escopo de função ou global.
- let e const têm escopo de bloco (entre chaves {}).
- Variáveis declaradas dentro de funções ou blocos não são acessíveis fora deles.
*/