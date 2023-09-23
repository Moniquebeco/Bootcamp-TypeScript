import { CompanyAccount } from './class/CompanyAccount';
import { PeopleAccount } from './class/PeopleAccount';
import { NewAccount } from './class/NewAccount';


const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Monique', 12345)
console.log(peopleAccount);
peopleAccount.withDraw(101)

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.deposit()
console.log(companyAccount)

const newAccount: NewAccount = new NewAccount('Alice', 50);
newAccount.deposit(100)
console.log(NewAccount)