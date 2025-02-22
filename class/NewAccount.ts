import { DioAccount } from "./DioAccount";

export class NewAccount extends DioAccount {
    constructor(name: string, accountNumber: number){
        super(name, accountNumber)
    }

    public deposit = (value: number): void => {
        if(this.validateStatus()) {
            super.deposit(value + 10)
        }
    };
}