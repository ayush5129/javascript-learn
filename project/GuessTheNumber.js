let randomNumber = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector("#subt")
const userInput = document.querySelector("#guessField")
const guessSlot = document.querySelector(".guesses")
const remainingSlot = document.querySelector(".lastResult")
const lowHi = document.querySelector(".lowOrHi")
const startOver = document.querySelector(".resultParas")

const p = document.createElement('p');
let prevGuess = []
let numGuess = 1
let playGame = true

// check player is able too play the match or not
if(playGame){
  submit.addEventListener("click",function(e){
     e.preventDefault();
     const guess = parseInt(userInput.value)
     validateGuess(guess);
  })
}
function validateGuess(guess){
  // validate that useriput is in between from 1 to 100 and check that is it a number or not
  if(isNaN(guess)){
    alert("Please enter a valid number")
  }
  else if(guess < 1){
    alert("Please enter a  number greater than 1")
  }
  else if(guess > 100){
    alert("Please enter a  number less than 100")
  }
  else{
    prevGuess.push(guess)
    if(numGuess === 11){
      displayGuess(guess)
      displayMessage(`Game over, Random number was ${randomNumber}`)
      endGame()
    }
    else{
      displayGuess(guess)
      checkGuess(guess)
    }
  }
}
function checkGuess(guess){
  // check that, the value guess by user is equal or not with random number
  if(guess === randomNumber){
    displayMessage(`You guested right`)
    endGame()
  }
  else if(guess < randomNumber){
    displayMessage(`Number is too low`)
  }
  else if(guess > randomNumber){
    displayMessage(`Number is too high`)
  }
}
function displayGuess(guess){
  // clean the input feild
  // show previous guess and remaining guess
  userInput.value = ''
  guessSlot.innerHTML += `${guess}  `
  numGuess++
  remainingSlot.innerHTML = `${11 -  numGuess}`
}
function displayMessage(message){
  // using low and high display a message
  lowHi.innerHTML = `<h3>${message}</h3>`

}
function endGame(){
  // end the game
  userInput.value = ''
  userInput.setAttribute("disabled","")
  p.classList.add("button")
  p.innerHTML = `<h2 id = "newGame"> start a new game </h2> `
  startOver.appendChild(p)
  playGame = false
  newGame()
}
function newGame(){
  // start a new game
  const newGameButton = document.querySelector("#newGame")
  newGameButton.addEventListener("click",function(e){
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = []
    numGuess = 1
    guessSlot.innerHTML = ''
    remainingSlot.innerHTML = `${11 - numGuess}`
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)
    playGame = true
  })
}