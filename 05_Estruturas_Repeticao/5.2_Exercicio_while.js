//Visitando cidades com while

let cidades = []


while (true){
    let cidade = prompt("Digite o nome de uma cidade (ou 'sair' para encerrar):");
    
    if (cidade.toLowerCase() === 'sair') {
        break;
    }
    
    cidades.push(cidade);
}

alert("Cidades visitadas: " + cidades.join(", "));
alert("Total de cidades visitadas: " + cidades.length);