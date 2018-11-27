

class Account{
	constructor(){
		this.moneyAmount = 0
		//store the amount of money in the account
	}
	add( moneyToAdd ){
		this.moneyAmount += moneyToAdd;
		return this.moneyAmount;
		//add money to the amount stored in the account
		//takes in an amount
		//adds it to the existing amount
		//returns the new amount in the account
	}
	remove( amount ){
		if(this.moneyAmount > amount) {
            this.moneyAmount -= amount;
            return amount;
        } else {
			var remaining = this.moneyAmount;
            this.moneyAmount = 0;
            return remaining;
        }
		//removes funds from an account
		//check if the amount to withdraw is more than the account
		//if more, only withdraw the amount in the account, not more
		//if less, withdraw the amount specified
		//return the amount actually withdrawn
	}
	getAmount(){
		return this.moneyAmount;
		//returns the amount in the account
	}
}