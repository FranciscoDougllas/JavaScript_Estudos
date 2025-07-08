// Exemplo real de uso de condicionais if e else: verificação de categoria de ingresso em um cinema

let idade = 12;
let estudante = true; // true se for estudante, false caso contrário

if (idade < 3) {
    console.log("Entrada gratuita para bebês.");
} else if (idade < 12) {
    console.log("Ingresso infantil: R$ 10,00.");
} else if (idade < 18) {
    console.log("Ingresso juvenil: R$ 15,00.");
} else if (estudante) {
    console.log("Ingresso meia-entrada para estudante: R$ 12,00.");
} else {
    console.log("Ingresso adulto: R$ 24,00.");
}