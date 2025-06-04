const baralho = [];

let opcao = "";

do {
    opcao = prompt(`
        Baralho de cartas:\n
        ${baralho.join(", ")}\n
        Escolha uma opção:\n
        1 - Adicionar carta\n
        2 - Remover carta\n
        3 - Sair`);

    switch (opcao){
        case "1":
            const carta = prompt("Digite o nome da carta:");
            if (carta) {
                baralho.push(carta);
                alert(`Carta "${carta}" adicionada ao baralho.`);
            } else {
                alert("Nome da carta não pode ser vazio.");
            }
            break;
        case "2":
            if (baralho.length > 0) {
                const cartaRemovida = baralho.pop();
                alert(`Carta "${cartaRemovida}" removida do baralho.`);
            } else {
                alert("Nenhuma carta no baralho para remover.");
            }
            break;
        case "3":
            alert("Saindo do sistema.");
            break;
        default:
            alert("Opção inválida. Tente novamente.");
            break;
    }
}while (opcao !== "3");