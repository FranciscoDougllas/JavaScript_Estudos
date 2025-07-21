class ContaBancaria{
    #saldo;

    constructor(saldoInicial){
        this.#saldo = saldoInicial;
    }

    get aprensentarSaldo(){
        return this.#saldo + " moedas";
    }

    sacarDinheiro(valor){
        if(valor > this.#saldo){
            console.log(`Saldo insuficiente para sacar os ${valor}`);
            console.log(`Saldo atual: ${this.#saldo}`);
        }else{
            this.#saldo -= valor;
            console.log(`Saque de ${valor} realizado com sucesso. Novo saldo: ${this.#saldo}`);
        }
    }

    depositarDinheiro(valor){
        if(valor > 0){
            this.#saldo += valor;
            console.log(`Depósito de ${valor} realizado com sucesso. Novo saldo: ${this.#saldo}`);
        }else{
            console.log("Valor de depósito inválido");
        }
    }
}

let minhaConta = new ContaBancaria(1000);

minhaConta.sacarDinheiro(500);
minhaConta.sacarDinheiro(1000);

minhaConta.depositarDinheiro(200);
minhaConta.depositarDinheiro(2200);


console.log(minhaConta.aprensentarSaldo);