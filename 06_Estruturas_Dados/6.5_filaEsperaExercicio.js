let fila = [];
let opcao = "";

do {
    let pacientes = "";
    for (let i = 0; i < fila.length; i++){
        pacientes += `${i + 1} - ${fila[i]}\n`;
    }

    opcao = prompt(`Fila de espera:\n${pacientes}\nEscolha uma opção:\n1 - Adicionar paciente\n2 - Atender paciente\n3 - Sair`);

    switch (opcao){
        case "1":
            const nomePaciente = prompt("Digite o nome do paciente:");
            fila.push(nomePaciente);
            break;
        case "2":
            if (fila.length > 0) {
                const pacienteAtendido = fila.shift();
                alert(`Paciente atendido: ${pacienteAtendido}`);
            } else {
                alert("Nenhum paciente na fila.");
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