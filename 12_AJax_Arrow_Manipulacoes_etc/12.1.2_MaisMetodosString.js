// Exemplo 1: Métodos de Transformação
let texto = "JavaScript é Incrível";

// toUpperCase() - Converte todo o texto para maiúsculo
console.log("Maiúsculo:", texto.toUpperCase());

// toLowerCase() - Converte todo o texto para minúsculo
console.log("Minúsculo:", texto.toLowerCase());

// trim() - Remove espaços em branco no início e fim
let textoComEspacos = "   Olá Mundo   ";
console.log("Texto sem espaços:", textoComEspacos.trim());

// Exemplo 2: Métodos de Busca e Substituição
let frase = "O Brasil é um país muito grande e muito bonito";

// includes() - Verifica se contém uma substring
console.log("Contém 'país'?", frase.includes("país"));

// replace() - Substitui a primeira ocorrência
console.log("Substituir primeira 'muito':", frase.replace("muito", "extremamente"));

// replaceAll() - Substitui todas as ocorrências
console.log("Substituir todos 'muito':", frase.replaceAll("muito", "extremamente"));

// Exemplo 3: Métodos de Divisão e União
let nomeCompleto = "Maria Silva Santos";

// split() - Divide a string em um array
let partesNome = nomeCompleto.split(" ");
console.log("Nome dividido:", partesNome);

// charAt() - Retorna o caractere em uma posição específica
console.log("Primeira letra:", nomeCompleto.charAt(0));

// padStart() - Preenche o início da string
let numero = "123";
console.log("Número preenchido:", numero.padStart(6, "0"));

// padEnd() - Preenche o final da string
console.log("Texto preenchido:", "ABC".padEnd(6, "-"));

// concat() - Concatena strings
let parte1 = "Olá";
let parte2 = "Mundo";
console.log("Concatenação:", parte1.concat(" ", parte2)); 