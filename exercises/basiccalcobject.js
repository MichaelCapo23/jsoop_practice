
class Calculator{
	constructor(){
		this.num1 = null;
		this.num2 = null;
		this.operator = null;
		this.counter = 0;
		//takes in nothing
		//make storage for the operator and the numbers
	}
	loadOperator( op ){
		var opArr = ["+", "-", "*", "/"];
		for(var operator in opArr) {
			if(opArr[operator] === op) {
				this.operator = op;
				return true;
			}
		}
        return false;
		//adds the operator to the next calculation
		//takes in the operator
		//checks if it is a valid operation (+-*/)
			//save the op to the constructor storage
			//return true
		//or return false if not the right operator
	}
	loadNumber(num){
		if(isNaN(num) || this.counter >= 2) {
			return false;
		} else {
			if(this.num1 === null) {
                this.num1 = num;
                this.counter++;
                return this.counter;
            } else {
				this.num2 += num;
                this.counter++;
				return this.counter;
			}
		}

		//takes in a number and stores it as one of the numbers to perform math on
		//takes in 1 number
		//checks if it is actually a number and if we have fewer than 2 numbers
		//if it is a number, and we have 2 or fewer numbers, store it
			//return the number of numbers stored
		//otherwise return false (too many numbers stored)
	}
	calculate(){
		switch (this.operator) {
			case "+" :
				var result = this.num1 + this.num2;
                this.result = result;
                this.num1 = null;
                this.num2 = null;
                this.counter = 0;
                return this.result;
				break;
            case "-" :
                var result = this.num1 - this.num2;
                this.result = result;
                this.num1 = null;
                this.num2 = null;
                this.counter = 0;
                return this.result;
                break;
            case "*" :
                var result = this.num1 * this.num2;
                this.result = result;
                this.num1 = null;
                this.num2 = null;
                this.counter = 0;
                return this.result;
                break;
            case "/" :
                var result = this.num1 / this.num2;
                this.result = result;
                this.num1 = null;
                this.num2 = null;
                this.counter = 0;
                return this.result;
                break;
		}
		this.result = result;
		this.num1 = null;
		this.num2 = null;
		this.counter = 0;
		return this.result;
		//calculate the result of the stored numbers and operator
		//takes in nothing
		//calculates with the operator and 2 numbers
		//clears out the stored numbers
		//returns the calculated result
	}
}