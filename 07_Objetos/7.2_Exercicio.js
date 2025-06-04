const imoveis = [];
let opcao = "";

do {
    opcao = prompt(`Bem vindo(a) ao Cadastro de Imóveis\nTotal de Imóveis: ${imoveis.length}\n\nEscolha uma opção\n1 - Novo Imóvel\n2 - Listar Imóveis\n3 - Sair`);

    switch (opcao) {
        case "1":
            const imovel = {};
            imovel.proprietario = prompt("Informe o nome do proprietário do imóvel:");
            imovel.quartos = prompt("Quantos quartos possui o imóvel?");
            imovel.banheiros = prompt("Quantos banheiros possui o imóvel?");
            imovel.garagem = prompt("O imóvel possui garagem? (SIM/NÃO)");

            const confirmacao = confirm(
                "Salvar este imóvel?\n" +
                "\nProprietário: " + imovel.proprietario +
                "\nQuartos: " + imovel.quartos +
                "\nBanheiros: " + imovel.banheiros +
                "\nPossui Garagem: " + imovel.garagem
            );

            if (confirmacao) {
                imoveis.push(imovel);
            }
            break;

        case "2":
            if (imoveis.length === 0) {
                alert("Nenhum imóvel cadastrado.");
            } else {
                for (let i = 0; i < imoveis.length; i++) {
                    alert(
                        "Imóvel " + (i + 1) +
                        "\nProprietário: " + imoveis[i].proprietario +
                        "\nQuartos: " + imoveis[i].quartos +
                        "\nBanheiros: " + imoveis[i].banheiros +
                        "\nPossui garagem: " + imoveis[i].garagem
                    );
                }
            }
            break;

        case "3":
            alert("Encerrando programa...");
            break;

        default:
            alert("Opção inválida!");
    }

} while (opcao !== "3");