// Sistema de Vagas de Emprego

const vagas = []

function listarVagas() {
    const vagasEmTexto = vagas.reduce(function (textoFinal, vaga, indice){
        textoFinal += indice + ". "
        textoFinal += vaga.nome
        textoFinal += " (" + vaga.candidatos.length + " candidatos)\n"
        return textoFinal
    }, "")

    alert(vagasEmTexto)
}

function novaVaga(){
    const nome = prompt("Informe um nome para a vaga: ")
    const descricao = prompt("Informe uma descricao para a vaga: ")
    const dataLimite = prompt("Informe uma Data Limite (dd/mm/aa): ")

    const confirmacao = confirm(
        "Deseja criar uma nova vaga com essas informacoes?\n" +
        "Nome: " + nome + "\n" +
        "Descricao: " + descricao + "\n" +
        "Data Limite: " + dataLimite
    )

    if (confirmacao) {
        vagas.push({
            nome,
            descricao,
            dataLimite,
            candidatos: []
        })
        alert("Vaga criada com sucesso!")
    } else {
        alert("Operação cancelada.")
    }
}

function visualizarVaga() {
    const indice = prompt("Informe o índice da vaga que deseja visualizar:")
    const vaga = vagas[indice]
    if (!vaga) {
        alert("Índice inválido!")
        return
    }
    const candidatosEmTexto = vaga.candidatos.reduce((texto, candidato) => texto + "\n - " + candidato, "")
    alert(
        "Índice: " + indice +
        "\nNome: " + vaga.nome +
        "\nDescrição: " + vaga.descricao +
        "\nData Limite: " + vaga.dataLimite +
        "\nQuantidade de candidatos: " + vaga.candidatos.length +
        "\nCandidatos inscritos: " + candidatosEmTexto
    )
}

function inscreverCandidato() {
    const nomeCandidato = prompt("Informe o nome do candidato:")
    const indice = prompt("Informe o índice da vaga para inscrever o candidato:")
    const vaga = vagas[indice]
    if (!vaga) {
        alert("Índice inválido!")
        return
    }
    const confirmacao = confirm(
        "Deseja inscrever o candidato " + nomeCandidato + " na vaga " + indice + "?\n" +
        "Nome: " + vaga.nome + "\n" +
        "Descrição: " + vaga.descricao + "\n" +
        "Data Limite: " + vaga.dataLimite
    )
    if (confirmacao) {
        vaga.candidatos.push(nomeCandidato)
        alert("Candidato inscrito com sucesso!")
    } else {
        alert("Operação cancelada.")
    }
}

function excluirVaga() {
    const indice = prompt("Informe o índice da vaga que deseja excluir:")
    const vaga = vagas[indice]
    if (!vaga) {
        alert("Índice inválido!")
        return
    }
    const confirmacao = confirm(
        "Tem certeza que deseja excluir a vaga " + indice + "?\n" +
        "Nome: " + vaga.nome + "\n" +
        "Descrição: " + vaga.descricao + "\n" +
        "Data Limite: " + vaga.dataLimite + "\n" +
        "Quantidade de candidatos: " + vaga.candidatos.length
    )
    if (confirmacao) {
        vagas.splice(indice, 1)
        alert("Vaga excluída com sucesso!")
    } else {
        alert("Operação cancelada.")
    }
}

function exibirMenu() {
    const opcao = prompt(
        "Sistema de Vagas de Emprego\n" +
        "1. Listar vagas disponíveis\n" +
        "2. Criar uma nova vaga\n" +
        "3. Visualizar uma vaga\n" +
        "4. Inscrever um candidato em uma vaga\n" +
        "5. Excluir uma vaga\n" +
        "6. Sair"
    )
    return opcao
}

function executar() {
    let opcao = ""
    do {
        opcao = exibirMenu()
        switch(opcao) {
            case "1":
                listarVagas()
                break
            case "2":
                novaVaga()
                break
            case "3":
                visualizarVaga()
                break
            case "4":
                inscreverCandidato()
                break
            case "5":
                excluirVaga()
                break
            case "6":
                alert("Saindo...")
                break
            default:
                alert("Opção inválida!")
        }
    } while (opcao !== "6")
}

executar()
