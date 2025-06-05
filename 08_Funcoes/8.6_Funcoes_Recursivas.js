//Funcoes recursivas
// Uma funcao recursiva eh uma funcao que chama a si mesma

function dividir(num){
    console.log(num);
    if(num % 2 === 0 && num > 0){
        dividir(num / 2);
    } else{
        return num;
    }
}

// Exemplo de uso
dividir(100); // 100, 50, 25
// A funcao acima divide o numero por 2 enquanto ele for par e maior que 0
// Quando o numero for impar ou menor que 0, a funcao retorna o numero
// A funcao imprime o numero antes de chamar a si mesma, entao o resultado sera:
// 100, 50, 25