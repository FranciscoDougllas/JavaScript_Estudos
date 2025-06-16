// Exemplo 1: Formatação de CPF
function formatarCPF(cpf) {
    // Remove caracteres não numéricos
    cpf = cpf.replace(/\D/g, '');
    
    // Adiciona a formatação
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
}

let cpf = "12345678900";
console.log("CPF Formatado:", formatarCPF(cpf));

// Exemplo 2: Validação de Email
function validarEmail(email) {
    // Verifica se contém @ e pelo menos um ponto após @
    let temArroba = email.includes('@');
    let partesEmail = email.split('@');
    let temPonto = partesEmail[1] ? partesEmail[1].includes('.') : false;
    
    return temArroba && temPonto;
}

console.log("Email válido?", validarEmail("teste@email.com"));
console.log("Email válido?", validarEmail("email@invalido"));

// Exemplo 3: Formatação de Nome
function formatarNome(nome) {
    // Divide o nome em palavras
    let palavras = nome.toLowerCase().split(' ');
    
    // Capitaliza a primeira letra de cada palavra
    palavras = palavras.map(palavra => {
        if (palavra.length > 2) { // Não capitaliza artigos e preposições
            return palavra.charAt(0).toUpperCase() + palavra.slice(1);
        }
        return palavra;
    });
    
    return palavras.join(' ');
}

console.log("Nome formatado:", formatarNome("JOÃO DA SILVA")); 