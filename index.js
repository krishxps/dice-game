var randomNumber1 = Math.floor((Math.random() * 6) + 1);

var randomDice = "images/dice" + randomNumber1 + ".png";

var image = document.querySelectorAll("img")[0];

image.setAttribute("src", randomDice);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDice2 = "images/dice" + randomNumber2 + ".png";

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomDice2);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 won...!"
}else if (randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 won...!"
}else{
    document.querySelector("h1").innerHTML = "Tieeeeeeee"
}