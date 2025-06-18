/**
 * Função que exibe o horário atual formatado
 * Esta função é executada a cada segundo através do setInterval
 */
function showTime(){
    // Cria um novo objeto Date para obter o horário atual
    let dia = new Date();
    
    // Obtém as horas, minutos e segundos
    let hora = dia.getHours();
    let minuto = dia.getMinutes();
    let segundo = dia.getSeconds();
    
    // Formata os números para sempre terem 2 dígitos (adiciona 0 à esquerda se necessário)
    let horaFormatada = hora < 10 ? `0${hora}` : hora;
    let minutoFormatado = minuto < 10 ? `0${minuto}` : minuto;
    let segundoFormatado = segundo < 10 ? `0${segundo}` : segundo;
    
    // Monta a string do horário completo no formato HH:MM:SS
    let horaCompleta = `${horaFormatada}:${minutoFormatado}:${segundoFormatado}`;
    
    // Exibe o horário no console
    console.log(horaCompleta);
}

// Executa a função showTime a cada 1000 milissegundos (1 segundo)
setInterval(showTime, 1000);