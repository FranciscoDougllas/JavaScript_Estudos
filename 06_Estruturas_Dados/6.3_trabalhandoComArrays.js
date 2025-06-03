//Trabalhando com Arrays

const carros = ['Fusca', 'Civic', 'Corolla', 'Onix', 'HB20', 'Gol', 'Palio', 'Fox', 'Argo', 'Ka'];
console.log(carros);

//Adicionando elementos, push adiciona ao final do array
carros.push('Celta')
console.log(carros)

//Adicionando elementos no início do array, unshift adiciona ao início do array
carros.unshift('Corsa')
console.log(carros)

//Removendo o último elemento do array, pop remove o último elemento do array
carros.pop()
console.log(carros)

//Removendo o primeiro elemento do array, shift remove o primeiro elemento do array
carros.shift()
console.log(carros)

//Removendo um elemento específico do array, splice remove o elemento específico do array
carros.splice(2, 1) // remove o elemento na posição 2
console.log(carros)

//Verificando se um elemento está no array, includes verifica se o elemento está no array
console.log(carros.includes('Civic')) // true
console.log(carros.includes('Fusca')) // false

//Encontrando o índice de um elemento, indexOf retorna o índice do elemento no array
console.log(carros.indexOf('Civic')) // 1
console.log(carros.indexOf('Fusca')) // -1 (não encontrado)