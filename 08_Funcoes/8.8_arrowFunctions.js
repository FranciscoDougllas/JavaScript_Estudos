//Arrow functions
// Arrow functions são uma forma mais concisa de escrever funções em JavaScript. Elas não têm seu próprio contexto de `this`, o que as torna úteis em muitos casos, especialmente quando se trabalha com métodos de objetos ou callbacks.

const somar = (a, b) => {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Os parâmetros devem ser números');
    }
    return a + b;
}
// Exemplo de uso
console.log(somar(5, 10)); // 15
console.log(somar(20, 30)); // 50


// Arrow functions com retorno condicional
const maiorIdade = idade => 
    idade >= 18 ? `Você tem ${idade} anos, e é maior de idade.` : `Você tem ${idade} anos, e é menor de idade.`;
// Exemplo de uso
console.log(maiorIdade(20)); // Você tem 20 anos, e é maior de idade.
console.log(maiorIdade(17)); // Você tem 17 anos, e é menor de idade.


// Arrow functions com retorno de objeto
const pessoa = (nome, idade) => ({
    nome: nome,
    idade: idade,
    apresentar: function() {
        return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`;
    }
});
// Exemplo de uso
const joao = pessoa('João', 25);
console.log(joao.apresentar()); // Olá, meu nome é João e tenho 25 anos.

// Arrow functions com parâmetros padrão
const saudacao = (nome = 'Visitante') => `Olá, ${nome}!`;
// Exemplo de uso
console.log(saudacao('Maria')); // Olá, Maria!
console.log(saudacao()); // Olá, Visitante!