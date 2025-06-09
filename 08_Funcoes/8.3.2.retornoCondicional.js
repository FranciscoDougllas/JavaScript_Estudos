//Funcao com Retorno Condicional

function MaiorIdade(idade){
    if(idade >= 18){
        return `Voce tem ${idade} anos, e maior de idade.`;
    }else{
        return `Voce tem ${idade} anos, e menor de idade.`;
    }
}

console.log(MaiorIdade(20)); // Voce tem 20 anos, e maior de idade.
console.log(MaiorIdade(17)); // Voce tem 17 anos, e menor de idade.
console.log(MaiorIdade(18)); // Voce tem 18 anos, e maior de idade.
console.log(MaiorIdade(16)); // Voce tem 16 anos, e menor de idade.