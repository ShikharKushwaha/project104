// generation of random value
var y = Math.floor(Math.random() * 10 + 1);
var guess = 1;
var playername = localStorage.getItem("player_name")
function submit() {
    var x = document.getElementById("guessField").value;
    if (x == y) {
        alert("CONGRATULATIONS!!! " + playername + " YOU GUESSED IT RIGHT IN" + guess +
            "GUESS ");
        guess = 1;
    } else if (x > y) /* if guessed number is greater than actual number*/ {
        guess++;
        alert("OOPS SORRY!! TRY A SMALLER NUMBER");
    } else {
        guess++;
        alert("OOPS SORRY!! TRY A GREATER NUMBER")
        
    }
    
}
// count of attempts
// until hit



// function for the number sent by the user


function playAgain() {
    y = Math.floor(Math.random() * 10 + 1);
}
