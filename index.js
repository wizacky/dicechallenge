var rN1 = Math.floor(Math.random()*6)+1
var rN2 = Math.floor(Math.random()*6)+1
var randomNumber1 = String(rN1);
var randomNumber2 = String(rN2);
var resultNumber="images\\dice" +randomNumber1+ ".png";
var resultNumber2="images\\dice" +randomNumber2+ ".png";
document.querySelector(".img1").setAttribute("src",resultNumber);
document.querySelector(".img2").setAttribute("src",resultNumber2);

if (rN1 > rN2) {document.querySelector(".result-display").innerHTML= "🚩Player 1 Wins!"
} else if (rN1 < rN2) {document.querySelector(".result-display").innerHTML= "Player 2 Wins!🚩"
} else {document.querySelector(".result-display").innerHTML= "Draw!"
}
