//Arrow Function

//Função tradicional
function soma(x, y){
    return x + y;
}
console.log(soma(1, 2));

//Arrow Function
const soma1 = (x, y) => {
    return x + y;   
}
console.log(soma1(1, 2));

//Arrow Function com return implícito
const soma2 = (x, y) => x + y;   
console.log(soma2(1, 2));

//Arrow Function com um parâmetro
const soma3 = x => x + 1;
console.log(soma3(1));

//Arrow Function com mais de um parâmetro
const soma4 = (x, y) => x + y;
console.log(soma4(1, 2));






