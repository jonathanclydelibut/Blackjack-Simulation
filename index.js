


let hasBlackJack = false;
let isAlive = false;
let message = "";



let cards = [];
let sum = 0;

let player = {
    name: "Jon",
    chips: 150
}

let playerEl = document.getElementById("player-el");
console.log(playerEl);

playerEl.textContent = player.name + " $" + player.chips;



let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");



function startGame () {
    isAlive = true;
    let firstCard = randomNumber();
    let secondCard = randomNumber();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
}

function renderGame() {


    if ( sum <= 20) {
    
        message = "Do you want to draw another card?";
    }
    else if (sum === 21) {
        hasBlackJack = true;
        message = "Blackjack!";
    }
    else {
    
        isAlive = false;
        message = "Loss";
    }
    
    cardsEl.textContent = "Cards: ";

    for ( let i = 0; i < cards.length; i++)
    {
        cardsEl.textContent += cards[i] + " ";
    }

    messageEl.textContent = message;
    sumEl.textContent = "Sum: " + sum;
    
}

function newCard() {
if (isAlive) {
    if (sum < 21) {
        let card = randomNumber();
        sum += card;

        cards.push(card);
        console.log(cards);
        renderGame();
    }
    else {}
}

}

function randomNumber () {
    let randomCard = 1 + Math.floor(Math.random() * 11);
    return randomCard;

}

