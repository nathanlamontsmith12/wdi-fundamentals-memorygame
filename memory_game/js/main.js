
var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];

var cardsInPlay = []; 

var gameBoard = document.getElementById('game-board');

function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
			alert("You found a match!");
		} else {
			alert("Sorry, try again.");
		}
}


function flipCard() { 
	var cardId = this.getAttribute('data-id');
	var cardIndex = parseInt(cardId, 10);
	console.log("User has flipped the " + cards[cardIndex].rank + " of " + cards[cardIndex].suit + ".");
	cardsInPlay.push(cards[cardIndex].rank);
	this.setAttribute('src', cards[cardIndex].cardImage);
	if (cardsInPlay.length === 2) {
		checkForMatch(); 
	}
}


function createBoard() {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		gameBoard.appendChild(cardElement);
	}
}

createBoard(); 
