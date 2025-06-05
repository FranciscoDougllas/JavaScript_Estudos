//Metodos em arrays
const personagens = [
  { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
  { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
  { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
  { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
  { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga" },
  { nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa" },
  { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
]

// forEach
personagens.forEach((personagem) => {
    console.log(`Nome: ${personagem.nome}, Raça: ${personagem.raca}, Classe: ${personagem.classe}, Nível: ${personagem.nivel}`);
})

// map
console.log("------------------")
const nomes = personagens.map((personagem) => {
    return personagem.nome;
})
console.log("Nomes:", nomes);

// filter
console.log("------------------")
const orcs = personagens.filter((personagem) => {
    return personagem.raca === "Orc";
})
console.log("Orcs:", orcs);

// sort
console.log("------------------")
const personagensOrdenados = [...personagens].sort((a, b) => {
    return a.nivel - b.nivel; // Ordena pelo nível em ordem crescente
});
console.log("Personagens ordenados por nível:");