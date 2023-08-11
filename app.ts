import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { NewAccount } from './class/NewAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
const newAccount: NewAccount = new NewAccount("jack", 11)

console.log(peopleAccount.getBalance())
peopleAccount.deposit(100)
console.log(peopleAccount.getBalance())
peopleAccount.withdraw(75)
console.log(peopleAccount.getBalance())
console.log("\n")

console.log(companyAccount.getBalance())
companyAccount.getLoan(100)
console.log(companyAccount.getBalance())
console.log("\n")

console.log(newAccount.getBalance())
newAccount.deposit(100)
console.log(newAccount.getBalance())
