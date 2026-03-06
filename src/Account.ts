import { Transaction } from "./TransactionHistory";

export class Account {
    readonly id: string;
    owner: string;
    private balance: number;
    private history: Transaction[];

    constructor(id: string, owner: string, balance: number = 0) {
        this.id = id;
        this.owner = owner;
        this.balance = balance;
        this.history = [];
    }

    getBalance(): number {
        return this.balance;
    }

    deposit(amount: number): void {
        if (amount <= 0) {
            throw new Error("Transfer amount must be strictly positive");
        } 

        this.balance += amount;

        this.history.push({
            type: "DEPOSIT",
            amount: amount,
            date: new Date()
        });
    }

    withdraw(amount: number): void {
        if (amount > this.balance) {
            throw new Error("Insufficient funds");
        }
            
        this.balance -= amount;

        this.history.push({
            type: "WITHDRAWAL",
            amount: amount,
            date: new Date()
        });
    }

    getHistory(): Transaction[] {
        return [...this.history];
    }

    transfer(amount: number, targetAccount: Account): void {
        if (this.id === targetAccount.id){
                    throw new Error("Cannot transfer to the same account");
        }

        if (amount === 0){
            throw new Error("Transfer amount must be strictly positive");
        }

        this.withdraw(amount);

        targetAccount.deposit(amount);
    }
}
