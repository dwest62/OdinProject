
//Prompt for user input and get random computer answer.

let numberOfRoundsChoice = () => prompt('How many rounds do you want to play')
let userChoice = () => prompt("Please choose Rock, Paper, or Scissors").toLowerCase();
let choices = ['rock','paper','scissors'];
let getRandomInt = () => Math.floor(Math.random()*choices.length);
computerAnswer = () => choices[getRandomInt()]

/*Function to play a round of Rock, Paper, Scissors:
    result = [message and score value] for calculations.*/

const playRound = (playerSelection,computerSelection) => {
    let result;
    switch(playerSelection) {
    case 'rock':
        switch (computerSelection){
            case 'rock':
                result = ['It\'s a tie. Rock = Rock',0];
                break;
            case 'paper':
                result = ['You lose. Paper beats Rock',-1];
                break;
            case 'scissors':
                result = ['You win! Rock beats Scissors!',1];
                break;
            default:
                break;
        }
            break;
    case 'paper':
        switch (computerSelection){
            case 'rock':
                result = ['You win! Paper beats Rock!',1];
                break;
            case 'paper':
                result = ['It\'s a tie. Paper = Paper',0];
                break;
            case 'scissors':
                result = ['You lose! Scissors beats Paper!',-1];
                break;
            default:
                break;
        }
            break;
    case 'scissors':
        switch (computerSelection){
            case 'rock':
                result = ['You lose! Rock beats Scissors',-1];
                break;
            case 'paper':
                result = ['You win! Paper beats Rock',1];
                break;
            case 'scissors':
                result = ['It\'s a tie. Scissors = Scissors',0];
                break;
            default:
                break;
        }
        break;
    default:
        result = ['Invalid Entry. Automatic Loss',-1];
        break;
    }
        return result
    }

    //Function to tally total score and log rounds.

    tallyScore = () => {
        let i=numberOfRoundsChoice();
        let roundScore=0
        do{
            const input = playRound(userChoice(),computerAnswer())
            roundScore += (input[1]);
            console.log(input[0]);
            i--; 
        }
        while(i>0)
        return roundScore
    }

    
    //Function to declare winner in console based on score.

    declareWinner = () => {
        let score=tallyScore()
        if(score < 0){
            return 'You lost the match. Better luck next time.'
        }
        else if(score > 0){
            return 'You won the match!'
        }
        else if(score == 0){
            return 'You tied the computer.'
        }
        return score
    }

    console.log(declareWinner())