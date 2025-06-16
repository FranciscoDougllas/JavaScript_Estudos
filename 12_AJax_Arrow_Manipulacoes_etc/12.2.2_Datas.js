// Manipulação de datas em JavaScript

// Criando uma nova data (data atual)
let dataAtual = new Date();
console.log('Data atual:', dataAtual);

// Criando uma data específica (ano, mês, dia, hora, minuto, segundo)
let dataEspecifica = new Date(2024, 2, 15, 14, 30, 0);
console.log('Data específica:', dataEspecifica);

// Métodos para obter partes da data
console.log('Ano:', dataAtual.getFullYear());
console.log('Mês:', dataAtual.getMonth() + 1); // Mês começa em 0
console.log('Dia:', dataAtual.getDate());
console.log('Dia da semana:', dataAtual.getDay()); // 0 = Domingo, 6 = Sábado
console.log('Hora:', dataAtual.getHours());
console.log('Minutos:', dataAtual.getMinutes());
console.log('Segundos:', dataAtual.getSeconds());
console.log('Milissegundos:', dataAtual.getMilliseconds());

// Métodos para formatar data
console.log('Data formatada:', dataAtual.toLocaleDateString()); // Formato local
console.log('Data e hora formatada:', dataAtual.toLocaleString()); // Data e hora local
console.log('ISO String:', dataAtual.toISOString()); // Formato ISO

// Manipulando datas
let data = new Date();
data.setDate(data.getDate() + 7); // Adiciona 7 dias
console.log('Data + 7 dias:', data);

// Calculando diferença entre datas
let data1 = new Date(2024, 2, 15);
let data2 = new Date(2024, 2, 20);
let diferenca = data2 - data1;
console.log('Diferença em milissegundos:', diferenca);
console.log('Diferença em dias:', diferenca / (1000 * 60 * 60 * 24));

// Formatando data personalizada
function formatarData(data) {
    return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`;
}
console.log('Data formatada personalizada:', formatarData(dataAtual));