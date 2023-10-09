import { CompanyAccount } from './class/CompanyAccount';
import { PeopleAccount } from './class/PeopleAccount';
import { NewAccount } from './class/NewAccount';

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Monique', 10, true);
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20, true);
const newAccount: NewAccount = new NewAccount('N-DIO', 40, true);

peopleAccount.deposit(100)
peopleAccount.getBalance();

peopleAccount.withdraw(150) 
peopleAccount.getBalance();
peopleAccount.withdraw(80)
peopleAccount.getBalance();

companyAccount.deposit(250)
companyAccount.getBalance();

companyAccount.getLoan(500);
companyAccount.getBalance();

newAccount.deposit(100.00);
newAccount.getBalance();

const inactivePeopleAccount: PeopleAccount = new PeopleAccount(1, 'Alice', 10, false);
const inactiveCompanyAccount: CompanyAccount = new CompanyAccount('DIO-2', 20, false);
const inactiveNewAccount: NewAccount = new NewAccount('N-DIO-2', 40, false);

// inactivePeopleAccount.deposit(200);
// inactiveNewAccount.deposit(300);
// inactiveCompanyAccount.withdraw(10);
// inactiveCompanyAccount.getLoan(10);

