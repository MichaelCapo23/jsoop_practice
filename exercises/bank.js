class Bank {
    constructor(bankName) {
        this.bankName = {}
        // this.bankName = bankName;
        // this.bankName = {};
        //takes in the name of the bank.
        //makes an object to store all accounts into
    }

    makeAccount(accountNumber) {
        if (this.bankName[accountNumber] === undefined) {
            this.bankName[accountNumber] = new Account();
            // return this.bankName.accountNumber;
        } else {
            return false;
        }
        //makes an account
        //takes in the account number of an account
        //checks if the account number already exists in the account storage object in the constructor
        //if already exists, returns false
        //otherwise makes an new Account object
        //returns the Account object that was constructed
    }

    checkForAccount(accountNumber) {
        if (this.bankName[accountNumber] === undefined) {
            return false;
        } else {
            return true;
        }
        //checks if an account exists or not
        //takes in the account number of an account
        //returns false if the account does not exist in the accounts object from the constructor
        //returns true if the account does exist
    }

    removeAccount(accountNumber) {
        if (this.bankName[accountNumber] === undefined) {
            return `account ${accountNumber} does not exist`;
        } else if (this.bankName[accountNumber].moneyAmount >= 1) {
            return `account is not empty`;
        } else {
            delete this.bankName[accountNumber];
            return `account ${accountNumber} deleted`;
        }
        //removes an account
        //takes in an account number
        //if the account doesn't exist, returns
        //"account <accountNumber> does not exist" where accountNumber is the account number
        //if the account is not empty, returns
        //'account is not empty'
        //otherwise deletes the account from the constructor storage
        //returns 'account <accountNumber> deleted'

    }

    deposit(accountNumber, amount) {
        if (this.bankName[accountNumber] === undefined) {
            return `account does not exist`;
        } else {
            this.bankName[accountNumber].add(amount);
            return `account ${accountNumber} now has ${this.bankName[accountNumber].moneyAmount}`
        }
        //deposits money into an account
        //takes in an account number and a numeric amount
        //if the account doesn't exist, returns
        //'account does not exist'
        //otherwise uses the account's add method and adds to the account
        //returns
        //"account <accountNumber> now has <new account amount>
    }

    withdraw(accountNumber, amount) {
        if (this.bankName[accountNumber] === undefined) {
            return `account does not exist`;
        }
        else {
            var result = this.bankName[accountNumber].remove(amount);
            return `removed ${result} from account ${accountNumber}. It now has ${this.bankName[accountNumber].moneyAmount}`
        }


        //removes money from an account
        //takes in an account number and an amount
        //checks if the account exists, if not
        //return 'account does not exist'
        //uses the Account's remove method to withdraw funds from the account
        //returns "removed <amount withdrawn> from account <account number>. It now has <remaining amount in account>"
    }
}