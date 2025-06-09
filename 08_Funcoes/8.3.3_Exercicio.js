//Calculo de Percntagem
function CalcPercent(valor, percentual){
    if (typeof valor !== 'number' || typeof percentual !== 'number') {
        throw new Error('Os parâmetros devem ser números');
    }
    return `${percentual}% de ${valor} é ${((valor * percentual) / 100).toFixed(2)}`;
}

// Testes
console.log(CalcPercent(100, 10)); // 10
console.log(CalcPercent(200, 15)); // 30
console.log(CalcPercent(50, 20)); // 10
console.log(CalcPercent(80, 25)); // 20
console.log(CalcPercent(0, 50)); // 0