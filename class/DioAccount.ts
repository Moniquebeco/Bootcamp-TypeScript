export abstract class DioAccount {
    private readonly accountNumber: number;
    private readonly name: string;
    private status: boolean = true;
    balance: number = 0;

    constructor(name: string, accountNumber: number, status: boolean) {
        this.name = name;
        this.accountNumber = accountNumber;
        this.status = status;
    }
    deposit = (value: number): void => {
        if (this.validateStatus()) {
            this.balance += value;
            console.log('Você depositou');
        } else {
            console.log("Conta inativa!");
        }
    }


    getName = (): string => {
        return this.name
    }

    withdraw = (withdrawValue: number): void => {
        if (this.validateStatus() && this.getBalance() - withdrawValue < 0) {
            console.log('Saque falhou - Saldo insuficiente');
        }
        this.setBalance(this.getBalance() - withdrawValue);
        console.log(`Saque no valor de ${withdrawValue}.`);
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
