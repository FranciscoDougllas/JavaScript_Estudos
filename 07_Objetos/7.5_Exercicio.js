// Criação de um objeto chamado students com informações de um estudante
let students = {
    name: 'John',         // Nome do estudante
    age: 20,              // Idade do estudante
    wieght: 75.4,         // Peso do estudante
    isSubscribed: true,   // Se está inscrito ou não

    // Método que exibe as informações do estudante no console
    informations: function(){
        console.log(`${this.name} tem ${this.age} anos e pesa ${this.wieght} kg. ${this.isSubscribed ? 'Está inscrito' : 'Não está inscrito'}`);
    }
}

// Exibe as informações do estudante (inscrito)
students.informations();

// Altera o status de inscrição para falso
students.isSubscribed = false;

// Exibe novamente as informações do estudante (não inscrito)
students.informations();
