var inputbox = document.getElementById('textbox')
var result = document.getElementById('result')
var guesscount = document.getElementById('guesscount')
var errorMessage = document.getElementById('error-message');
var errorNumber = document.getElementById('error-number');
var popup = document.querySelector('.popup')
var out = document.querySelector('.out')
var game = document.querySelector('.game')
var failnum = document.getElementById('failnum')
var guess = 3

var random = Math.floor(Math.random()*10) + 1
if(random>6){
    random = random-5
}

function checknumber(){

    errorMessage.style.display = "none";
    errorNumber.style.display = "none";

    if (inputbox.value === "") {
        errorMessage.style.display = "block";  
        return;
    }

    if (inputbox.value > 5) {
        errorNumber.style.display = "block";  
        return;
    }
    
    if(random == inputbox.value){
        result.textContent = "you are correct"
        game.style.display = "none"
        popup.style.display = "block"
        return;
    }

    else{
        guess = guess-1

        if(guess == 0){
            game.style.display = "none"
            out.style.display = "block"
            failnum.innerHTML = "You are lost, Generated Random Number is: " + random;
            return;
        }

        guesscount.textContent = "Available Guess: " + guess
    }

}