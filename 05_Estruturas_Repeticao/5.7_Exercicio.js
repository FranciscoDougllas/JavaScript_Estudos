let pares = [];
let impares = [];
let multiplosDe3 = [];
let multiplosDe5 = [];
let somaPar = 0;
let somaImpar = 0;
let media = 0;

for(let i = 1; i <= 20; i ++){
    if(i % 2 == 0){
        pares.push(i);
        somaPar += i;
    }else{
        impares.push(i);
        somaImpar += i;
    }
    if(i % 3 == 0){
        multiplosDe3.push(i);
    }
    if(i % 5 == 0){
        multiplosDe5.push(i);
    }
}

console.log(`Os Numeros Pares são: ${pares}`);
console.log(`Os Numeros Impares são: ${impares}`);
console.log(`Os Numeros Multiplos de 3 são: ${multiplosDe3}`);
console.log(`Os Numeros Multiplos de 5 são: ${multiplosDe5}`);
console.log(`A soma dos Numeros Pares é: ${somaPar}`);
console.log(`A soma dos Numeros Impares é: ${somaImpar}`);