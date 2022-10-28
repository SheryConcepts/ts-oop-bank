import inquirer from "inquirer";
import Bank from "./bank.js";


class Consumer {
    private acc: Bank = new Bank();
    public balance: number = this.acc.balance;    

    constructor(public name: string, public email: string, public age: number) {}

    public status() {
        return `
                name: ${this.name} 
                email: ${this.email}
                age: ${this.email}
                balance: ${this.balance}
        `
    }

    public deposit(a: number): string {
        return this.acc.credit(a);
    }
    
    public withdraw(a: number): string {
        return this.acc.debit(a);
    }

    public homepage() {

    }
}

export default Consumer;