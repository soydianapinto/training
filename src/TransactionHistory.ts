export interface Transaction {
    type: "DEPOSIT" | "WITHDRAWAL";
    amount: number;
    date: Date;

}