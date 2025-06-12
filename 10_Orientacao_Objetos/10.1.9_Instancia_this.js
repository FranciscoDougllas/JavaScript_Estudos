// Função que cria um objeto pessoa com nome, sobrenome, idade e um método para retornar o nome completo
function createPerson(name, lastName, age){
    return {
        // Propriedades fixas (não estão usando os parâmetros recebidos)
        name: 'Ricardo', // Nome da pessoa
        lastName: "Lacerda", // Sobrenome da pessoa
        age: 45, // Idade da pessoa
        // Método que retorna o nome completo usando 'this'
        getFullname() {
            return `${this.name} ${this.lastName}`
        }
    }
}

// Criando duas pessoas (mas os dados passados não são usados)
let person1 = createPerson("Amanda", "Sobral", 90);
let person2 = createPerson("Miguel", "Adv", 23);

// Exibindo os objetos criados
console.log(person1);
console.log(person2);
// Exibindo o nome completo da primeira pessoa
console.log(person1.getFullname());