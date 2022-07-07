
let playerSelection = "none";
let computerSelection = "none";

//querySelect buttons, event selectors, and update div to show results
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
let playerresults = document.querySelector('#playerwins');
let cpuresults = document.querySelector('#cpuwins');
let victor = document.querySelector('#victor');

rock.addEventListener('click', () => {
    playRound("rock");
    playerresults.textContent = `Player victories: ${playerWins}`;
    cpuresults.textContent = `Computer victories: ${cpuWins}`;
});

paper.addEventListener('click', () => {
    playRound("paper");
    playerresults.textContent = `Player victories: ${playerWins}`;
    cpuresults.textContent = `Computer victories: ${cpuWins}`;
});

scissors.addEventListener('click', () => {
    playRound("scissors");
    playerresults.textContent = `Player victories: ${playerWins}`;
    cpuresults.textContent = `Computer victories: ${cpuWins}`;
});


//initalize variables to store player and computer victories
let playerWins = 0;
let cpuWins = 0;

//function to randomly return rock, paper, or scissors

function computerPlay() {
    const cpuNum = Math.floor(Math.random() * 3);

    if (cpuNum === 0) {
        return cpuChoice = "rock";
    }
    else if (cpuNum === 1) {
        return cpuChoice = "paper";
    }
    else {
        return cpuChoice = "scissors";
    }
}

//function to play a single round of RPS
function playRound(playerSelection, computerSelection) {

    computerSelection = computerPlay();
    
    switch (true) { 
        case playerSelection === computerSelection:
            alert(`It's a tie! You both selected ${playerSelection}`);
            break;
        case playerSelection === "rock" && computerSelection === "paper":
            alert("You lose this round! Paper beats rock!");
            cpuWins +=1;
            break;
        case playerSelection === "paper" && computerSelection === "scissors":
            alert("You lose this round! Scissors beats paper!");
            cpuWins +=1;
            break;
        case playerSelection === "scissors" && computerSelection === "rock":
            alert("You lose this round! Rock beats scissors!");
            cpuWins +=1;
            break;
        case playerSelection === "rock" && computerSelection === "scissors":
            alert("You win this round! Rock beats scissors!");
            playerWins +=1;
            break;
        case playerSelection === "paper" && computerSelection === "rock":
            alert("You this round! Paper beats rock!")
            playerWins +=1;
            break;
        case playerSelection === "scissors" && computerSelection === "paper":
            alert("You win this round! Scissors beats paper!");
            playerWins +=1;
            break;

    }   
    if (playerWins === 5) {
        alert("You win the game!") 
    }
    else if (cpuWins === 5) {
        alert("The computer wins the game!");
    }
}

console.log(playerWins);
console.log(cpuWins);
