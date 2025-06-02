const resultado = document.querySelector("#resultado");
const btnCalcular = document.querySelector("#btnCalcular");


btnCalcular.addEventListener("change", function () {
    const data = parseFloat(document.querySelector("#data").value);
    const dataAtual = new Date();   
    let idade = dataAtual.getFullYear() - data;

    resultado.innerHTML = `Você tem ${idade} anos.`;
    if (dataAtual.getMonth() < 0 || (dataAtual.getMonth() === 0 && dataAtual.getDate() < 1)) {
        idade--;
    }
});