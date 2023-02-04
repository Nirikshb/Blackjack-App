// let firstCard = getRando()
// let secondCard = getRando()
let player = {
    name : "Per",
    chips : "145"}
let card = []
let sum = 0 
let hasBlackJack = false
let isAlive = false
let messageEl = document.getElementById('message-el')
let sumEl = document.getElementById('sum-el')
let cardsEl = document.getElementById('cards-el')
let playerEl = document.getElementById("player-el")



// let sumEl = document.querySelector("#sum-el")
//Decalre a var called msg& assgn its value an empty string
// let message = "";
//reassign the msg var to string we're logging out
playerEl.textContent = player.name + ": Rs" + player.chips

function getRando(){
    let random = Math.floor(Math.random()*13)+1
    if(random > 10){
        return 10
    }else if(random === 1){
        return 11
    }else{
        return random
    }
}


function startGame() {
    isAlive = true
    let firstCard = getRando()
    let secondCard = getRando()
    card = [firstCard + secondCard]
     sum = firstCard + secondCard
    renderGame()
}

// let button = document.querySelector('#game')
// button.addEventListener("click",startGame)

function renderGame(){
    cardsEl.textContent = "Cards : "
    
    //loop to render out all the cards instead of two 
    for (let i = 0; i < card.length; i++){
     cardsEl.textContent += card[i] + " "
    }

    sumEl.textContent = "Sum :" + sum

    if(sum <= 20){
        message = "wanna draw a new card";
        
     }else if(sum === 21){
         message = "Champ you got a blackjack";
         hasBlackJack = true
     }else{
         message = "Bud you done";
         isAlive = false
     }
     messageEl.textContent = message
    
    //  console.log(message);    
    //dont know when to use onclick addevent listenner
}

function newCard(){
    // console.log("time to draw new cards");
    //create a card var, hard code its value
    if(isAlive === true && hasBlackJack === false){
    let cards = getRando()
    card.push(cards)
    console.log(cards);
    //add new card to sum var
    sum += cards

 renderGame()
    //call start game
}
}
//cashing out// tracking who won
// console.log(isAlive);

//log it out
