// Operadores de Comparação em JavaScript
// São usados para comparar dois valores e retornar um valor booleano (true ou false).

// == Igualdade (com conversão de tipo)
// Compara apenas o valor, ignorando o tipo dos operandos.
// Se os valores forem iguais após conversão de tipo, retorna true.
console.log(5 == 5);      // true  (mesmo valor e mesmo tipo)
console.log(5 == '5');    // true  (mesmo valor, tipos diferentes - string e número)

// === Igualdade Estrita (sem conversão de tipo)
// Compara valor e tipo dos operandos.
// Só retorna true se ambos forem iguais e do mesmo tipo.
console.log(5 === 5);     // true  (mesmo valor e mesmo tipo)
console.log(5 === '5');   // false (mesmo valor, tipos diferentes)

// != Desigualdade (com conversão de tipo)
// Compara apenas o valor, ignorando o tipo dos operandos.
// Retorna true se os valores forem diferentes após conversão de tipo.
console.log(5 != 3);      // true  (valores diferentes)
console.log(5 != '5');    // false (valores iguais após conversão de tipo)

// !== Desigualdade Estrita (sem conversão de tipo)
// Compara valor e tipo dos operandos.
// Retorna true se forem diferentes em valor ou tipo.
console.log(5 !== 3);     // true  (valores diferentes)
console.log(5 !== '5');   // true  (mesmo valor, tipos diferentes)

// > Maior que
// Retorna true se o valor à esquerda for maior que o da direita.
console.log(5 > 3);       // true
console.log(3 > 5);       // false

// < Menor que
// Retorna true se o valor à esquerda for menor que o da direita.
console.log(3 < 5);       // true
console.log(5 < 3);       // false

// >= Maior ou igual a
// Retorna true se o valor à esquerda for maior ou igual ao da direita.
console.log(5 >= 5);      // true
console.log(5 >= 6);      // false

// <= Menor ou igual a
// Retorna true se o valor à esquerda for menor ou igual ao da direita.
console.log(3 <= 5);      // true