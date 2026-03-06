import { Account } from '../src/Account';

describe('Account Class Tests', () => {

    let testAccount: Account;
    let testAccount2: Account;
        
    beforeEach(() => {
        testAccount = new Account("001", "Ana", 100);
        testAccount2 = new Account("002", "Carlos", 50);
    });

    it('should return the correct initial balance', () => {
        expect(testAccount.getBalance()).toBe(100);
    });

    it('should deposit money correctly and update balance', () => {
        testAccount.deposit(50);
        expect(testAccount.getBalance()).toBe(150);
    });

    it('should withdraw money correctly and update balance', () => {
        testAccount.withdraw(20);
        expect(testAccount.getBalance()).toBe(80);
    });

    // Errors

    it('should throw an error when depositing a negative amount', () => {
        expect(() => {
            testAccount.deposit(-10);
        }).toThrow("Transfer amount must be strictly positive");
    })

    it('should throw an error when withdrawing more than the current balance', () => {
        expect(() => {
            testAccount.withdraw(5000);
        }).toThrow("Insufficient funds");
    });

    // Level 2

    describe('Transaction History', () => {
        
        it('should start with an empty history', () => {
            expect(testAccount.getHistory().length).toBe(0);
        });

        it('should record a DEPOSIT transaction correctly', () => {
            testAccount.deposit(50);
            const history = testAccount.getHistory();
            
            expect(history.length).toBe(1);
            expect(history[0].type).toBe("DEPOSIT");
            expect(history[0].amount).toBe(50);
            
            expect(history[0].date).toBeInstanceOf(Date); 
        });

        it('should record a WITHDRAWAL transaction correctly', () => {
            testAccount.withdraw(20);
            const history = testAccount.getHistory();
            
            expect(history.length).toBe(1);
            expect(history[0].type).toBe("WITHDRAWAL");
            expect(history[0].amount).toBe(20);
        });

        it('should prevent external modification of the history (Immutability check)', () => {
            testAccount.deposit(50);
            
            const hackedHistory = testAccount.getHistory();
            
            hackedHistory.push({
                type: "DEPOSIT",
                amount: 1000000,
                date: new Date()
            });

            const realHistory = testAccount.getHistory();
            expect(realHistory.length).toBe(1); 
            expect(realHistory[0].amount).toBe(50);
        });
    });

    // Level 3

    it('should transfer money successfully between two distinct accounts', () => {
        testAccount.transfer(40, testAccount2);

        expect(testAccount.getBalance()).toBe(60);
        expect(testAccount2.getBalance()).toBe(90);

        const testAccountHistory = testAccount.getHistory();
        const testAccount2History = testAccount2.getHistory();

        expect(testAccountHistory.length).toBe(1);
        expect(testAccountHistory[0].type).toBe("WITHDRAWAL");
        expect(testAccountHistory[0].amount).toBe(40);
        
        expect(testAccount2History.length).toBe(1);
        expect(testAccount2History[0].type).toBe("DEPOSIT");
        expect(testAccount2History[0].amount).toBe(40);

        
    })

    it('should throw an error when trying to transfer to the same account', () => {
        expect(() => {
            testAccount.transfer(10, testAccount);
        }).toThrow("Cannot transfer to the same account");
    });

    it('should throw an error for negative or zero transfer amounts', () => {
        expect(() => {
            testAccount.transfer(-5, testAccount2);
        }).toThrow("Transfer amount must be strictly positive");
    });

    it('should throw an error if the origin account has insufficient funds', () => {
        expect(() => {
            testAccount.transfer(500, testAccount2);
        }).toThrow("Insufficient funds");
        
        expect(testAccount2.getBalance()).toBe(50); 
    });
});
