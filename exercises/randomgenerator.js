

class RandomGenerator{
	constructor(minValue, maxValue){
		this.maxValue = maxValue;
		this.minValue = minValue;
		this.randomNum = null;
		if(this.maxValue === undefined) {
			this.maxValue = 10
		}
		if(this.minValue === undefined) {
			this.minValue = 1;
		}
		//takes in the minimum and maximum values
		//if they are not defined, it sets the minimum to 1, and the max to 10
		//makes storage for the random number
	}
	generate(){
		this.randomNum = Math.floor(Math.random() * this.maxValue) + this.minValue;
		//make a random value between the minimum and maximum values
		//and store the number into the storage from the constructor
	}
	getRange(){
		var minMaxObj = {"min": this.minValue, "max": this.maxValue};
		return minMaxObj;
		//return an object with min and max, min being the minimum value for the generator, max being the maximum value
		//returns a basic object literal
	}
	getNum(){
		return this.randomNum;
		//return the random number that was generated by generate()
	}
}