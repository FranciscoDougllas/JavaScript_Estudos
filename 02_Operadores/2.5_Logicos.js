//Operadores Logicos
// Temos lógicos são usados para combinar expressões booleanas e retornar um valor booleano. Os principais operadores lógicos em JavaScript são:
// && (E), || (OU) e ! (NÃO).

// && E lógico
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false

console.log(false && false); // false

// || OU lógico
console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true

console.log(false || false); // false

// ! NÃO lógico
console.log(!true); // false
console.log(!false); // true
console.log(!5); // false (5 é truthy)
console.log(!0); // true (0 é falsy)