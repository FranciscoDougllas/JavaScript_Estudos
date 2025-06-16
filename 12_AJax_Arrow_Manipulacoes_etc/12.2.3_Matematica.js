// Matemática em JavaScript

// Constantes matemáticas
console.log('PI:', Math.PI);
console.log('Euler:', Math.E);
console.log('Raiz quadrada de 2:', Math.SQRT2);
console.log('Raiz quadrada de 1/2:', Math.SQRT1_2);
console.log('Logaritmo natural de 2:', Math.LN2);
console.log('Logaritmo natural de 10:', Math.LN10);

// Métodos de arredondamento
let numero = 4.7;
console.log('Arredondamento para cima:', Math.ceil(numero));    // 5
console.log('Arredondamento para baixo:', Math.floor(numero));  // 4
console.log('Arredondamento normal:', Math.round(numero));      // 5

// Funções trigonométricas
console.log('Seno de 0:', Math.sin(0));
console.log('Cosseno de 0:', Math.cos(0));
console.log('Tangente de 0:', Math.tan(0));

// Funções exponenciais e logarítmicas
console.log('Potência:', Math.pow(2, 3));      // 2³ = 8
console.log('Raiz quadrada:', Math.sqrt(16));   // 4
console.log('Logaritmo natural:', Math.log(10));
console.log('Logaritmo base 10:', Math.log10(100));

// Funções de valor absoluto e sinal
console.log('Valor absoluto:', Math.abs(-5));   // 5
console.log('Sinal:', Math.sign(-5));          // -1

// Funções de máximo e mínimo
console.log('Máximo:', Math.max(1, 2, 3, 4, 5));
console.log('Mínimo:', Math.min(1, 2, 3, 4, 5));

// Números aleatórios
console.log('Número aleatório entre 0 e 1:', Math.random());
console.log('Número aleatório entre 1 e 10:', Math.floor(Math.random() * 10) + 1);

// Funções de arredondamento para precisão
let numeroPreciso = 3.14159;
console.log('Arredondar para 2 casas:', numeroPreciso.toFixed(2));