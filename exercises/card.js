
class Card{
	constructor(suite, faceValue){
		this.suite = suite;
		this.faceValue = faceValue;
	}
	getSuite(){
		return this.suite;
	}
	getFaceValue(){
		return this.faceValue;
	}
}

class Deck{
	constructor(){
		this.deck = {count : 0};
		//takes in nothing
		//make storage for your card objects
	}
	addCard( suite, faceValue ){
		this.card = new Card();
		this.card.suite = suite;
        this.card.faceValue = faceValue;
		this.deck[this.deck.count] = this.card;
		this.deck.count++;
		return this.deck.count;
		//adds a card to the deck
		//takes in a string suite and faceValue
		//makes a new card Object from the Card template
		//adds the card object to the storage in the constructor
		//returns the amount of cards currently stored
	}
	shuffle(){
		for(var i = 0; i < this.deck.count; i++) {
			var number1 = Math.floor(Math.random() * this.deck.count-1) + 1;
            var number2 = Math.floor(Math.random() * this.deck.count-1) + 1;
			var temp = this.deck[number1];
            this.deck[number1] = this.deck[number2];
            this.deck[number2] = temp;
        }
		//reorders the cards in the storage array in a random order
		//takes in nothing
		//returns nothing
	}
	getCardCount(){
        return this.deck.count;
		//gets the current amount of cards stored
		//takes in nothing
		//returns the amount of cards stored in the array in the constructor
	}
	dealCards( numCardsToDeal ){
		var cardsDealt = 0;
        var dealtCards = [];
        var position = this.deck.count -1;
		if(numCardsToDeal > this.deck.count) {
			for(var card in this.deck) {
                dealtCards[cardsDealt] = this.deck[position];
                delete this.deck[position];
                cardsDealt++;
                position--;
			}
		} else {
			for(var cards in this.deck) {
				if(cardsDealt === numCardsToDeal) {
                    this.deck.count -= numCardsToDeal;
					return dealtCards;
				} else {
                    dealtCards[cardsDealt] = this.deck[position];
                    delete this.deck[position];
                    cardsDealt++;
                    position--;
				}
			}
		}
        this.deck.count = 0;
		return dealtCards;
		//deals out a number of cards
		//takes in the number of cards to deal
		//removes that many cards from the deck
		//returns an array with that many cards in it
		//cannot return more cards than the deck has
	}
}