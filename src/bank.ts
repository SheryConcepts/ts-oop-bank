import IBank from "./i_bank.js";

class Bank_Acc implements IBank {

    balance: number = 100;

    debit(a: number): string {
        if (this.balance > a) {
            this.balance = this.balance - a;
            return `Debited amount ${a}, current balance is ${this.balance}`
        } else {
            return `You don't have sufficient funds, current balance is ${this.balance}`
        }
    }

    credit(a: number): string {
        this.balance = this.balance + a;
        return `Credited amount ${a}, current balance is ${this.balance}`
    }
}

export default Bank_Acc;