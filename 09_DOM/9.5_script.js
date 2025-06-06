function addPlayer() {
    // Obtém os valores dos campos de entrada
    const position = document.getElementById("position").value.trim();
    const name = document.getElementById("name").value.trim();
    const number = document.getElementById("number").value.trim();

    // Validação simples para evitar campos vazios
    if (!position || !name || !number) {
        alert("Preencha todos os campos para adicionar um jogador.");
        return;
    }

    const confirmation = confirm(`Escalar ${name} para a posição ${position} com o número ${number}?`);

    if (confirmation) {
        const teamList = document.getElementById("teamList");
        const playerItem = document.createElement("li");
        playerItem.id = `player-${number}`;
        playerItem.innerText = `${position} - ${name} (${number})`;
        teamList.appendChild(playerItem);

        // Limpa os campos após adicionar
        document.getElementById("position").value = "";
        document.getElementById("name").value = "";
        document.getElementById("number").value = "";
    }
}

function removePlayer() {
    const number = document.getElementById("numberToRemove").value.trim();

    if (!number) {
        alert("Informe o número do jogador para remover.");
        return;
    }

    const playerToRemove = document.getElementById(`player-${number}`);

    if (!playerToRemove) {
        alert("Jogador não encontrado.");
        return;
    }

    const confirmation = confirm(`Remover o jogador ${playerToRemove.innerText}?`);

    if (confirmation) {
        document.getElementById("teamList").removeChild(playerToRemove);
        document.getElementById("numberToRemove").value = "";
    }
}