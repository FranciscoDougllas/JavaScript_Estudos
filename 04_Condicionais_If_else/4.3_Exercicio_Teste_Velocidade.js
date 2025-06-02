//Exercicios de Teste de Velocidade
const veiculo1 =  prompt("Digite o veiculo1: ");
const velocidade1 = parseFloat(prompt("Digite a velocidade do veículo 1 em km/h:"));

const veiculo2 =  prompt("Digite o veículo 2:");
const velocidade2 = parseFloat(prompt("Digite a velocidade do veículo 2 em km/h:"));

if (velocidade1 > velocidade2){
    alert(`O veículo 1 (${veiculo1}) está mais rápido que o veículo 2 (${veiculo2}).`);
}else if (velocidade1 < velocidade2){
    alert(`O veículo 2 (${veiculo2}) está mais rápido que o veículo 1 (${veiculo1}).`);
}
else {
    alert(`Os veículos 1 (${veiculo1}) e 2 (${veiculo2}) estão na mesma velocidade.`);
}