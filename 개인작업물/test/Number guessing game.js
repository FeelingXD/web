var randomnumber =Math.floor(Math.random()*100)+1;

var guesses = document.querySelector('.guesses');
var lastResult = document.querySelector('.lastResult');
var lowOrHi = document.querySelector('.lowOrHi');

var guessSubmit = document.querySelector('.guessSubmit');
var guessField = document.querySelector('.guessField');

function checkGuess(){
    alert('');
}
function setGameOver(){
    guessField.disabled= true;
    guessSubmit.disabled =true;
    resetButton = document.createElement('button');
    resetButton.textContent = 'Start New game ';
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click',resetGame);   
}
function checkGuess(){
    var userGuess = Number(guessField.value);
    if(guessCount===1)
    {
        guesses.textContent = 'Previous Guesses: ';
    }
    guesses.textContent += userGuess + ' ';

    if(userGuess===randomnumber){
        lastResult.textContent = ' 정답 ';
        lastResult.style.backgroundColor = ' green ';
        lowOrHi.textContent = ' ';
        setGameOver();
    }else if (guessCount===10){
        lastResult.textContent = '실패 ';
        setGameOver();
    }else
    {
        lastResult.textContent = ' 오답 ';
        lastResult.styel.backgroundColor = 'red';
        if(userGuess<randomnumber)
        {
            lowOrHi.textContent = ' 낮음';

        }
        else if(randomnumber>userGuess)
        {
            lowOrHi.textContent = ' 높읍 ';

        }
    }
    guessCount++;
    guessField.value= ' ';
    guessField.focus();

}
function resetGame(){
    
}