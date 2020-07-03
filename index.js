// var randomNumber;
// randomNumber=Math.floor(Math.random()*7);
// var randomImg="dice"+randomNumber+".png";
// var randomSrc="images/"+randomImg;
// document.querySelector("img")[0].setAttribute("src",randomSrc);


// var a=document.getElementsByTagName('img');
// for (var i = 0; i<=1;i++) {
// 	a[i].src="images/dice1.png";
// }

var randomNumber1;
randomNumber1=Math.floor(Math.random()*6)+1;
var randomIMG="dice"+randomNumber1+".png";
var a=document.getElementsByTagName("img")[0];
a.src=randomIMG;


var randomNumber2;
randomNumber2=Math.floor(Math.random()*6)+1;
var randomSrc="dice"+randomNumber2+".png";
var a=document.getElementsByTagName("img")[1];
a.src=randomSrc;

if(randomNumber1>randomNumber2)
{
	document.getElementsByTagName("h1")[0].innerHTML="🎁 player 1 win";
}
else if(randomNumber1<randomNumber2)
{
	document.getElementsByTagName("h1")[0].innerHTML="player 2 win 🎁";
}
else
{
	document.getElementsByTagName("h1")[0].innerHTML="💫draw";
}