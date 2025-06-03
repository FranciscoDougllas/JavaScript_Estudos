//Conversor de medidas em JavaScript


const saida = document.querySelector(".saida");
const medida = parseFloat(prompt("Digite a medida que deseja converter:"));

saida.innerHTML = `<h2>Conversor de Medidas</h2>`;
if (isNaN(medida)) {
    saida.innerHTML += `<p>Por favor, insira um número válido.</p>`;
}
else {
    const metros = medida;
    const centimetros = metros * 100;
    const milimetros = metros * 1000;
    const polegadas = metros * 39.37;
    const jardas = metros * 1.09361;
    const milhas = metros * 0.000621371;

    saida.innerHTML += `<p>${metros} metros é igual a:</p>`;
    saida.innerHTML += `<ul>
        <li>${centimetros} centímetros</li>
        <li>${milimetros} milímetros</li>
        <li>${polegadas.toFixed(2)} polegadas</li>
        <li>${jardas.toFixed(2)} jardas</li>
        <li>${milhas.toFixed(6)} milhas</li>
    </ul>`;
}