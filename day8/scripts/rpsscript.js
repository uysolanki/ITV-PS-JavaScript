score={
    win:0,
    lose:0,
    tie:0
}

document.body.addEventListener('keydown', handleKeydownITV)
function handleKeydownITV(event)
{
console.log(event.key)
switch(event.key)
{
    case 'r':
    case 'R': playGame('Rock'); break

    case 'p':
    case 'P': playGame('Paper'); break

    case 's':
    case 'S': playGame('Scissors'); break
}
}

const rockButtonElement=document.getElementById('rock-button')
rockButtonElement.addEventListener('click',()=>{playGame('Rock')})

const paperButtonElement=document.getElementById('paper-button')
paperButtonElement.addEventListener('click',()=>{playGame('Paper')})

const scissorsButtonElement=document.getElementById('scissors-button')
scissorsButtonElement.addEventListener('click', ()=>{playGame('Scissors')})

var autoplayButtonElement=document.querySelector('.js-auto-play-button')
autoplayButtonElement.addEventListener('click',autoPlayMode)

let isAutoPlay=false                     //true
let intervalID 
function autoPlayMode()
{
//console.log("Autoplay button clicked")
if(isAutoPlay===false)
{
intervalID=setInterval(()=>{
let computerGeneratedPlayerMove=generateComputerMove()
playGame(computerGeneratedPlayerMove)
},2000) 

isAutoPlay=true
autoplayButtonElement.style.setProperty('background-color','green')
}

else
{
clearInterval(intervalID)
autoplayButtonElement.style.setProperty('background-color','red')
isAutoPlay=false
}
}
function playGame(playerMove)
{
let computerMove=generateComputerMove()
console.log(`Player Move : ${playerMove}`)
console.log(`Computer Move : ${computerMove}`)

let result
switch(playerMove)
{
    case 'Rock':
        switch(computerMove)
        {
            case 'Rock': result='Tie'
            break
            case 'Paper': result='Lose'
            break
            case 'Scissors':result='Win'
        }

    break
    case 'Paper':
    switch(computerMove)
        {
            case 'Rock': result='Win'
            break
            case 'Paper': result='Tie'
            break
            case 'Scissors':result='Lose'
        }
    break
    case 'Scissors':
    switch(computerMove)
        {
            case 'Rock': result='Lose'
            break
            case 'Paper': result='Win'
            break
            case 'Scissors':result='Tie'
        }
}

console.log(`Result : ${result}`)
switch(result)
        {
            case 'Lose': score.lose+=1
            break
            case 'Win': score.win+=1
            break
            case 'Tie' :score.tie+=1
        }
console.log(score)

const displayMovesElement=document.querySelector('#moves')
displayMovesElement.innerHTML=`Player Move : ${playerMove}    |     Computer Move : ${computerMove}`

const displayResultElement=document.querySelector('#results')
displayResultElement.innerHTML=`Result : ${result}`

const displayScoreElement=document.querySelector('#score')
displayScoreElement.innerHTML=`Wins : ${score.win} , Loss : ${score.lose} , Tie : ${score.tie}`
}

function generateComputerMove()
{
let randomNumber=Math.random()
console.log(randomNumber)
let computerMove
if(randomNumber<=0.33)
{
    computerMove='Rock'
}
else if(randomNumber>0.33 && randomNumber<=0.67)
{
    computerMove='Paper'
}
else
{
    computerMove='Scissors'
}
return computerMove
}
