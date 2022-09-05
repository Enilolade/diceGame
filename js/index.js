// var randomNumber1 = Math.floor(Math.random() * 6) + 1;
// var randomNumber2 = Math.floor(Math.random() * 6) + 1;
// var randomDice1 = "dice" + randomNumber1 + ".png";
// var randomDice2 = "dice" + randomNumber2 + ".png";
// var diceImg1 = document.querySelector(".dice-image1");
// var diceImg2 = document.querySelector(".dice-image2");
// console.log(randomDice1);
// console.log(randomDice2);
var rollDiceBtn = document.querySelector(".roll-dice-btn");
rollDiceBtn.addEventListener("click", rollDice);

function rollDice() {
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    var randomDice1 = "dice" + randomNumber1 + ".png";
    var randomDice2 = "dice" + randomNumber2 + ".png";
    console.log(randomDice1);
    console.log(randomDice2);
    var diceImg1 = document.querySelector(".dice-image1");
    var diceImg2 = document.querySelector(".dice-image2");
    diceImg1.setAttribute("src", "./images/" + randomDice1);
    diceImg2.setAttribute("src", "./images/" + randomDice2);
    var heading = document.querySelector("h1");
    if (randomNumber1 > randomNumber2) {
        heading.textContent = "Player 1 Wins!";
    } else if (randomNumber2 > randomNumber1) {
        heading.textContent = "Player 2 Wins!";
    } else {
        heading.textContent = "Draw!";
    }
    setTimeout(() => {
        document.location.reload();
    }, 2000);
    // return heading;
}