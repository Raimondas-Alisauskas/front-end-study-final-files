let deck;
let takeCardButt = document.getElementById(`takeCardBtn`);
let passBtn = document.getElementById(`passBtn`);
let newGameBtn = document.getElementById(`newGameBtn`)
let numberOfPlayers = 1;
let gameOver;
let playerOffset;
let dealerOffset;
let dealerStack;
let playerStack;


function createDeck() {
    for (let i = 0; i < 4; i++) {
        for (j = 2; j <= 14; j++) {
            let suit;
            let number;
            let value;
            if (i === 0)
                suit = 'H'
            if (i === 1)
                suit = 'C'
            if (i === 2)
                suit = 'D'
            if (i === 3)
                suit = 'S'

            if (j === 11) {
                number = 'J';
                value = 10
            }
            if (j === 12) {
                number = 'Q';
                value = 10
            }
            if (j === 13) {
                number = 'K';
                value = 10
            }
            if (j === 14) {
                number = 'A';
                value = 11
            }

            if (j < 11)
                number = j;
            if (j < 11)
                value = j;

            deck.push({ suit: suit, value: value, name: number })
        }
    }
}


const dealer = {
    cards: [],
    score: 0,
    takeCard: function() {
        let randomCard = Math.floor(Math.random() * deck.length)

        let card = "" + deck[randomCard].name + deck[randomCard].suit;
        putDealerCard(card);

        dealer.score += deck[randomCard].value
        dealer.cards.push(deck.splice(randomCard, 1)[0])
        document.getElementById('dealerScore').innerHTML = `${dealer.score}`;
        // console.log("dealer score - " + dealer.score)
    }
}

const Player = function(money, cards) {
    this.money = money;
    this.cards = cards;
    this.score = 0;
    this.takeCard = () => {
        let randomCard = Math.floor(Math.random() * deck.length)

        let card = "" + deck[randomCard].name + deck[randomCard].suit;
        putPlayerCard(card);

        player.score += deck[randomCard].value
        player.cards.push(deck.splice(randomCard, 1)[0])
            // console.log("player score - " + player.score)
        document.getElementById('player1Score').innerHTML = `${player.score}`;
        if (player.score > 21)
            results();
    };
    this.pass = () => {
        dealersTurn();
    };
}

let player = new Player(1000, []);


function start() {
    gameOver = false;
    deck = [];
    createDeck();
    dealer.score = 0;
    player.score = 0;
    dealer.cards = [];
    player.cards = [];
    playerOffset = 15;
    dealerOffset = 15;
    dealerStack = "";
    playerStack = "";
    document.getElementById('dealerCardsW').innerHTML = dealerStack;
    document.getElementById('player1CardsW').innerHTML = playerStack;


    // document.getElementById('player1Scores').innerHTML = "Player's score - 0";
    // document.getElementById('dealerScores').innerHTML = "Dealer's score - 0";



    displayResults(" ");

    for (let j = 0; j < 2; j++) {
        for (let i = 0; i < numberOfPlayers; i++) {
            let randomCard = Math.floor(Math.random() * deck.length);
            player.score += deck[randomCard].value;

            console.log(player.score);

            let card = "" + deck[randomCard].name + deck[randomCard].suit;
            putPlayerCard(card);
            player.cards.push(deck.splice(randomCard, 1)[0]);
            document.getElementById('player1Score').innerHTML = player.score.toString();
        }
        if (j == 0) {
            let dealerRandomCard = Math.floor(Math.random() * deck.length);
            dealer.score += deck[dealerRandomCard].value;

            console.log(dealer.score);
            // console.log(dealerRandomCard);
            console.log("suit: " +
                deck[dealerRandomCard].suit);
            console.log("name: " + deck[dealerRandomCard].name);

            let card = "" + deck[dealerRandomCard].name + deck[dealerRandomCard].suit;
            console.log("card: " + card);
            putDealerCard(card);
            dealer.cards.push(deck.splice(dealerRandomCard, 1)[0]);
            document.getElementById('dealerScore').innerHTML = dealer.score.toString();
            console.log(dealer);
        }
    }
}

function dealersTurn() {
    while (dealer.score < 17) {
        dealer.takeCard();
    }
    results();
}

function results() {
    if (dealer.score <= 21 && dealer.score > player.score || player.score > 21 /*&& dealer.score >= 17*/ ) {
        displayResults("dealer won");
    } else if (dealer.score > 21 || dealer.score < player.score) {
        displayResults("you won");
    } else if (dealer.score == player.score) {
        displayResults("draw");
    } else displayResults("error");
    gameOver = true;

}

function displayResults(text) {
    document.getElementById('results').innerHTML = text;
    console.log(text);
}

function putPlayerCard(card) {
    playerStack = `<img class="cardImage" src="./cards/PNG/${card}.png" style="left: ${playerOffset}px">`
    document.getElementById('player1CardsW').innerHTML += playerStack;
    playerOffset += 15;
    console.log(playerStack);

}


function putDealerCard(card) {
    dealerStack = `<img class="cardImage" src="./cards/PNG/${card}.png" style="left: ${dealerOffset}px">`;
    document.getElementById('dealerCardsW').innerHTML += dealerStack;
    dealerOffset += 15;
    console.log(dealerStack);

}

passBtn.addEventListener('click', function() {
    player.pass();
});

takeCardButt.addEventListener('click', function() {
    if (!gameOver) {
        player.takeCard();
    } else {
        displayResults("game is finished")

    }


});

newGameBtn.addEventListener('click', function() {
    start();
    // console.log("new")
});

// console.log(`dealer:` + dealer);
// console.log(dealer);
// console.log(`player:` + player1);
// console.log(player1);