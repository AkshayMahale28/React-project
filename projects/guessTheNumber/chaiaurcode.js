let randomNumber = Math.floor(Math.random() * 100 + 1);
console.log(typeof randomNumber);

let userInput = document.querySelector("#guessField");
let submitBtn = document.querySelector("#subt");
let guessSlot = document.querySelector(".guesses");
let remaining = document.querySelector(".lastResult");
let msg = document.querySelector(".lowOrHi");
let startOver = document.querySelector(".resultParas");

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;


let playGame = true;

if (playGame) {
    submitBtn.addEventListener('click', function (e) {
      e.preventDefault();
      const guess = parseInt(userInput.value);
      console.log(guess);
      validateGuess(guess);
    });
  }

function validateGuess(guess){
    if (isNaN(guess)) {
        alert("Please enter a valid number");
        
    }else if(guess < 1){
        alert("Please enter a number between 1 and 100");

    }else if(guess > 100){
        alert("Please enter a number between 1 and 100");
    }else {
        prevGuess.push[guess]
        if (numGuess === 11) {
            displayGuess(guess);
            displayMessage(`Game Over. Random number was ${randomNumber}`);
            endGame();
          } else {
            displayGuess(guess);
            checkGuess(guess);
          }
    }
}

function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage("You won!");
        endGame();
        
    }else if(guess < randomNumber){
        displayMessage("Number Is Too low!");

    }else if(guess > randomNumber){
        displayMessage("Number Is Too High!");
    }
}


function displayGuess(guess) {
    userInput.value=''
    guessSlot.innerHTML += `${guess},`
    numGuess++;
    remaining.innerHTML = `Guesses remaining: ${11 - numGuess}`;
    
}

function displayMessage(message) {
    msg.innerHTML = `<h2>${message}</h2>`;
  }

  function endGame() {
    guessSlot.innerHTML = '';
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML=`<h2 id="newGame">Start new Game</h2>`;
    startOver.appendChild(p)
    playGame=false
    newGame()
}

function newGame() {
    let newGame=document.querySelector('#newGame')
    newGame.addEventListener('click',(e)=>{
        randomNumber=parseInt(Math.random() * 100)+1
        prevGuess=[]
        numGuess=1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11 - numGuess} `;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true;

    })
    
}
         



