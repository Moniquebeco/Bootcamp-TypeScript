export abstract class DioAccount {
    private readonly accountNumber: number;
    private readonly name: string;
    private status: boolean = true;
    balance: number = 0;

    constructor(name: string, accountNumber: number) {
        this.name = name;
        this.accountNumber = accountNumber;
    }

    getName = (): string => {
        return this.name
    }

    // setName = (name: string): void => {
    //     this.name = name
    //     console.log('Nome alterado com sucesso');
    // }

    // deposit = (depositValue: number): number => {
    //     if (this.validateStatus()) {
    //         this.setBalance(this.getBalance() + depositValue);
    //         console.log('Depósito realizado com sucesso! Seu saldo agora é de: ' + this.getBalance());
    //     }
    //     return depositValue
    // }

    withDraw = (withDrawValue: number): void => {
        if (this.validateStatus() && this.getBalance() - withDrawValue < 0) {
            console.log('Saque falhou - Saldo insuficiente');
        }
        this.setBalance(this.getBalance() - withDrawValue);
        console.log(`Saque no valor de ${withDrawValue}.`);
        console.log(`Seu saldo atual é de: ${this.getBalance()}`);
    }

    getBalance = (): number => {
        return this.balance;
    }

    setBalance = (value: number): void => {
        this.balance = value;
    };

    validateStatus = (): boolean => {
        if (this.status) {
            return this.status
        }

        throw new Error("Conta inválida")
    }

}
