
let playerSelection = "none";
let computerSelection = "none;"

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

    //ask for player selection and store in playerSelection variable
    playerSelection = prompt("Rock, paper, or scissors?").toLowerCase();
    computerSelection = computerPlay();
    
    switch (true) { 
        case playerSelection === computerSelection:
            alert(`It's a tie! You both selected ${playerSelection}`);
            playRound(playerSelection, computerSelection);
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
        default:
            alert("You didn't choose rock, paper, or scissors so this round is forfeited!");
            cpuWins +=1;
    }   
}

//function to play a 5 round game of RPS and print the winner
function game() {
    for (let i = 0; i < 5; i++) {
        playRound(playerSelection, computerSelection);

        if (playerWins === 3) {
            alert("You win the game!")
        }
        else if (cpuWins === 3) {
            alert("The computer wins the game!");
        }
    }
}

game();

console.log(playerWins);
console.log(cpuWins);
