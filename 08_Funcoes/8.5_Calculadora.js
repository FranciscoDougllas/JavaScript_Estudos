function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

function areaRetangulo(base, altura) {
    return base * altura;
}

function areaQuadrado(lado) {
    return lado * lado;
}

function areaTrapezio(baseMaior, baseMenor, altura) {
    return ((baseMaior + baseMenor) * altura) / 2;
}

function areaCirculo(raio) {
    const pi = 3.14;
    return pi * raio * raio;
}

function menu() {
    return prompt(
        "Calculadora Geométrica\n" +
        "Escolha uma opção:\n" +
        "1. Área do Triângulo\n" +
        "2. Área do Retângulo\n" +
        "3. Área do Quadrado\n" +
        "4. Área do Trapézio\n" +
        "5. Área do Círculo\n" +
        "6. Sair"
    );
}

function main() {
    let opcao;
    do {
        opcao = menu();
        let resultado;
        switch (opcao) {
            case "1":
                const baseTri = parseFloat(prompt("Informe a base do triângulo:"));
                const alturaTri = parseFloat(prompt("Informe a altura do triângulo:"));
                resultado = areaTriangulo(baseTri, alturaTri);
                alert("Área do triângulo: " + resultado);
                break;
            case "2":
                const baseRet = parseFloat(prompt("Informe a base do retângulo:"));
                const alturaRet = parseFloat(prompt("Informe a altura do retângulo:"));
                resultado = areaRetangulo(baseRet, alturaRet);
                alert("Área do retângulo: " + resultado);
                break;
            case "3":
                const ladoQuad = parseFloat(prompt("Informe o lado do quadrado:"));
                resultado = areaQuadrado(ladoQuad);
                alert("Área do quadrado: " + resultado);
                break;
            case "4":
                const baseMaior = parseFloat(prompt("Informe a base maior do trapézio:"));
                const baseMenor = parseFloat(prompt("Informe a base menor do trapézio:"));
                const alturaTrap = parseFloat(prompt("Informe a altura do trapézio:"));
                resultado = areaTrapezio(baseMaior, baseMenor, alturaTrap);
                alert("Área do trapézio: " + resultado);
                break;
            case "5":
                const raio = parseFloat(prompt("Informe o raio do círculo:"));
                resultado = areaCirculo(raio);
                alert("Área do círculo: " + resultado);
                break;
            case "6":
                alert("Saindo da calculadora...");
                break;
            default:
                alert("Opção inválida. Tente novamente.");
        }
    } while (opcao !== "6");
}

main();