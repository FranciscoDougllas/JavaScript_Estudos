//Funcoes dentro de objetos
// Funções dentro de objetos são chamadas de métodos. Elas permitem que os objetos realizem ações ou cálculos relacionados a eles mesmos.

let carro = {
    marca: 'Toyota',
    modelo: 'Corolla',
    ano: 2020,
    
    // Método para exibir informações do carro
    exibirInfo: function() {
        return `Carro: ${this.marca} ${this.modelo}, Ano: ${this.ano}`;
    },
    
    // Método para calcular a idade do carro
    calcularIdade: function(anoAtual) {
        return anoAtual - this.ano;
    }
};

// Acessando o método exibirInfo
console.log(carro.exibirInfo()); // 'Carro: Toyota Corolla, Ano: 2020'
// Acessando o método calcularIdade
console.log(carro.calcularIdade(2023)); // 3