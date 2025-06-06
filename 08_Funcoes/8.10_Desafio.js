const vagas = []

function validarIndice(indice) {
    const i = Number(indice)
    return Number.isInteger(i) && i >= 0 && i < vagas.length ? i : -1
}

function listarVagas() {
    if (vagas.length === 0) {
        alert("Nenhuma vaga disponível.")
        return
    }
    const texto = vagas.map((vaga, i) =>
        `${i}. ${vaga.nome} (${vaga.candidatos.length} candidatos)`
    ).join('\n')
    alert(texto)
}

function novaVaga() {
    const nome = prompt("Nome da vaga:")
    const descricao = prompt("Descrição:")
    const dataLimite = prompt("Data Limite (dd/mm/aa):")
    if (!nome || !descricao || !dataLimite) {
        alert("Todos os campos são obrigatórios!")
        return
    }
    if (confirm(`Criar vaga?\nNome: ${nome}\nDescrição: ${descricao}\nData Limite: ${dataLimite}`)) {
        vagas.push({ nome, descricao, dataLimite, candidatos: [] })
        alert("Vaga criada com sucesso!")
    }
}

function visualizarVaga() {
    const indice = validarIndice(prompt("Índice da vaga:"))
    if (indice === -1) return alert("Índice inválido!")
    const vaga = vagas[indice]
    const candidatos = vaga.candidatos.length
        ? vaga.candidatos.map(c => `- ${c}`).join('\n')
        : "Nenhum candidato ainda."
    alert(
        `Índice: ${indice}\nNome: ${vaga.nome}\nDescrição: ${vaga.descricao}\nData Limite: ${vaga.dataLimite}\nCandidatos (${vaga.candidatos.length}):\n${candidatos}`
    )
}

function inscreverCandidato() {
    const nome = prompt("Nome do candidato:")
    const indice = validarIndice(prompt("Índice da vaga:"))
    if (!nome) return alert("Nome obrigatório!")
    if (indice === -1) return alert("Índice inválido!")
    const vaga = vagas[indice]
    if (confirm(`Inscrever ${nome} na vaga "${vaga.nome}"?`)) {
        vaga.candidatos.push(nome)
        alert("Candidato inscrito!")
    }
}

function excluirVaga() {
    const indice = validarIndice(prompt("Índice da vaga para excluir:"))
    if (indice === -1) return alert("Índice inválido!")
    const vaga = vagas[indice]
    if (confirm(`Excluir vaga "${vaga.nome}"?`)) {
        vagas.splice(indice, 1)
        alert("Vaga excluída!")
    }
}

function menu() {
    return prompt(
        "=== Sistema de Vagas ===\n" +
        "1️⃣ Listar vagas\n" +
        "2️⃣ Nova vaga\n" +
        "3️⃣ Visualizar vaga\n" +
        "4️⃣ Inscrever candidato\n" +
        "5️⃣ Excluir vaga\n" +
        "6️⃣ Sair"
    )
}

function executar() {
    let opcao
    do {
        opcao = menu()
        switch (opcao) {
            case "1": listarVagas(); break
            case "2": novaVaga(); break
            case "3": visualizarVaga(); break
            case "4": inscreverCandidato(); break
            case "5": excluirVaga(); break
            case "6": alert("Saindo..."); break
            default: alert("Opção inválida!")
        }
    } while (opcao !== "6")
}

executar()