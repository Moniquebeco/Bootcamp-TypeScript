import { DioAccount } from "./DioAccount";

export class CompanyAccount extends DioAccount {
    loan: number = 0;

    constructor(name:string, accountNumber: number){
        super(name, accountNumber)
    }

    getLoan = ( loanValue: number): void => {
        console.log("Você pegou um emprestimo");
        if (this.validateStatus()) {
            this.setBalance(this.getBalance() + loanValue)
        }
    }

    deposit = (): number => {
        return 0
    }
}