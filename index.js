
//for img 1
var randomNumber1 = Math.floor(Math.random()*6)+1;
var diceImage = "./images/dice"+randomNumber1+".png";
var img1Element = document.querySelector(".img1");
img1Element.src=diceImage;

//for dice 2
var randomNumber2 = Math.floor(Math.random()*6)+1;
var diceImage2 = "./images/dice"+randomNumber2+".png";
var img2Element = document.querySelector(".img2");
img2Element.src=diceImage2;

//Determing the winner and update the h1 text
var h1Element =document.querySelector("h1");

if(randomNumber1>randomNumber2){
    h1Element.textContent = "Player 1 Wins!";
} else if(randomNumber1<randomNumber2){
    h1Element.textContent = "Player 2 Wins";
} else {
    h1Element.textContent= "Draw!"
}