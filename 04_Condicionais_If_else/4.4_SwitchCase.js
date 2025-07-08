// Exemplo de uso do switch case na vida real: semáforo de trânsito
// O switch é uma estrutura de controle que permite comparar o valor de uma variável com vários casos possíveis, executando o bloco correspondente ao primeiro caso que for verdadeiro.

let corSemaforo = 'amarelo';

switch (corSemaforo) {
    case 'verde':
        console.log("O semáforo está verde. Pode seguir!");
        break;
    case 'amarelo':
        console.log("O semáforo está amarelo. Atenção, prepare-se para parar.");
        break;
    case 'vermelho':
        console.log("O semáforo está vermelho. Pare o veículo.");
        break;
    default:
        console.log("Cor do semáforo desconhecida. Siga com cautela!");
}

// O switch é útil quando temos várias opções para uma mesma variável, tornando o código mais organizado do que vários if...else encadeados.
