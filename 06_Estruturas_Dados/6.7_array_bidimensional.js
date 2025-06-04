//Arrays Bidimensionais

//Declaração de um array bidimensional
let matriz = [
    [1, 2, 3],
    ["a", "b", "c"],
    [true, false, true]
    [
        ["manga", "banana", "laranja"],
        ["maçã", "uva", "pera"],
        ["abacaxi", "kiwi", "morango"]
    ],
    [4, 5, 6],
    ["d", "e", "f"]
]
console.log(matriz);

//Acessando elementos de um array bidimensional
console.log(matriz[0][0]);
console.log(matriz[1][2]);
console.log(matriz[3][0][1]); // Acessando "banana"
console.log(matriz[3][1][2]); // Acessando "pera"
console.log(matriz[4][2]); // Acessando "f"