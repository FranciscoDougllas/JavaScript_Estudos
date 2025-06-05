let pessoa = {
    nome: "Francisco",
    idade: 34,

    saudacao: function () {
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    }
}

// Acessando o método saudacao do objeto pessoa
pessoa.saudacao(); // Olá, meu nome é Francisco e tenho 34 anos.
// Adicionando um novo método ao objeto pessoa

pessoa.aniversario = function () {
    this.idade++;
    console.log(`Feliz aniversário! Agora você tem ${this.idade} anos.`);
}

// Chamando o novo método aniversario
pessoa.aniversario(); // Feliz aniversário! Agora você tem 35 anos.