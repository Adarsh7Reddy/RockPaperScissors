const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')

const possibelChoices = document.querySelectorAll('button')
let userChoice
let ComputerChoice
let result

possibelChoices.forEach(possibelChoices => possibelChoices.addEventListener('click',(e) =>{
  userChoice =e.target.id
  userChoiceDisplay.innerHTML = userChoice
  generateComputerChoice()
  getResult()
}))

function generateComputerChoice(){
    const  randomNumber = Math.floor(Math.random() * 3)+1
    
    if(randomNumber === 1){
        ComputerChoice = 'rock'
    }
    if(randomNumber === 2){
        ComputerChoice = 'scissor'
    }
    if(randomNumber === 3){
        ComputerChoice = 'paper'
    }

    computerChoiceDisplay.innerHTML = ComputerChoice
}

function getResult(){
    if(ComputerChoice === userChoice){
        result ='its a draw!'
    }
    if(ComputerChoice === 'rock' && userChoice === 'paper'){
        result='you win!'
    }
    if(ComputerChoice === 'rock' && userChoice === 'scissor'){
        result='you lost!'
    }
    if(ComputerChoice === 'paper' && userChoice === 'scissor'){
        result='you lost!'
    }
    if(ComputerChoice === 'paper' && userChoice === 'rock'){
        result='you lost!'
    }
    if(ComputerChoice === 'scissor' && userChoice === 'rock'){
        result='you win!'
    }
    if(ComputerChoice === 'scissor' && userChoice === 'paper'){
        result='you lost!'
    }
    resultDisplay.innerHTML = result
}