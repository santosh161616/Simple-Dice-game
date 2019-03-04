
var temp=0; var fill=0; var trigger=1;var pl1=0;var pl2=0;

function myFunction() {
var con = Math.floor((Math.random() * 6)+1);

document.getElementById("demo").innerHTML = con;

if(con==1) {
document.getElementById("myImg").src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Dice-1-b.svg/1024px-Dice-1-b.svg.png";

/* fill=0;
temp=0;
*/

if(trigger%2==0) {
document.getElementById("bt2").disabled = true;
document.getElementById("bt2").style= "background-color: #e7e7e7";
document.getElementById("bt1").style= "background-color: #4CAF50";
document.getElementById("bt1").disabled = false;
document.getElementById("player").innerHTML ="Player 1 Score: - ";
pl2 = fill;
temp = pl1;
document.getElementById("pl2").innerHTML = pl2;
} else {document.getElementById("bt1").disabled = true;
		document.getElementById("bt1").style= "background-color: #e7e7e7";
        document.getElementById("bt2").style= "background-color: #4CAF50";
        document.getElementById("bt2").disabled = false;
       document.getElementById("player").innerHTML ="Player 2 Score: - ";
       pl1=fill;
       temp=pl2; 
       document.getElementById("pl1").innerHTML = pl1;
       }
trigger++;
}

else {
if(con==2) {
document.getElementById("myImg").src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Dice-2-b.svg/2000px-Dice-2-b.svg.png";
}
else if(con==3) {
document.getElementById("myImg").src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Dice-3-b.svg";
}
else if(con==4) {
document.getElementById("myImg").src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Dice-4-b.svg/1024px-Dice-4-b.svg.png";
}
else if(con==5) {
document.getElementById("myImg").src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Dice-5-b.svg/1024px-Dice-5-b.svg.png";
}
else if(con==6) {
document.getElementById("myImg").src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Dice-6-b.svg/768px-Dice-6-b.svg.png";
}

fill=temp+con;
temp = fill;

document.getElementById("score").innerHTML =fill;

if(fill>=100) { 

if (confirm("Congratulations you scored "+fill+" Press "+"OK"+" to Reset game!")) {
  resetGame();
} else {
  document.getElementById("score").innerHTML ="Oh! You've pressed Cancel!";
}

}
temp = fill;

}
}

function resetGame() {
temp=0;
fill=0; 
trigger=1;
pl1=0;
pl2=0;
document.getElementById("bt2").disabled = true;
document.getElementById("bt1").disabled = false;
document.getElementById("bt1").style="background-color:#4CAF50";
document.getElementById("bt2").style="background-color:#e7e7e7";
document.getElementById("pl1").innerHTML = 0;
document.getElementById("pl2").innerHTML = 0;
}