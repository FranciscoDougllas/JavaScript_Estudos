//String PadStart e PadEnd

let telefone = '4';
console.log(telefone.padEnd(9, '*'));

// PADSTART - Adiciona caracteres no início da string até atingir o comprimento especificado
// Sintaxe: string.padStart(comprimentoTotal, caractereDePreenchimento)
console.log("=== padStart() ===");
console.log("Telefone original:", telefone);
console.log("Com padStart(9, '*'):", telefone.padStart(9, '*')); // Adiciona '*' no início
console.log("Com padStart(11, '0'):", telefone.padStart(11, '0')); // Exemplo com zeros







