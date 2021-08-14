function computerPlay() {
    let computerSelection = Math.floor(Math.random() * 3);
    switch (computerSelection) {
        case 0:
            return 'Rock';
        case 1:
            return 'Paper';
        case 2:
            return 'Scissors';
    }
}


function playerPlay() {
    let playerSelection = prompt("What will you choose (Rock, Paper or Scissors)?: ")
    playerSelection = playerSelection.toLowerCase();
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
    return playerSelection;
}


function playRound(playerSelection, computerSelection) {

    if (
        (playerSelection === 'Rock' && computerSelection === 'Scissors') ||
        (playerSelection === 'Paper' && computerSelection === 'Rock') ||
        (playerSelection === 'Scissors' && computerSelection === 'Paper')
        ) {
            return 'player';
        }

    else if (
        (playerSelection === 'Rock' && computerSelection === 'Paper') ||
        (playerSelection === 'Paper' && computerSelection === 'Scissors') ||
        (playerSelection === 'Scissors' && computerSelection === 'Rock')
        ) {
            return 'computer';
        }

    return 'tie';
}


function game() {
    for (let i = 0; i < 5; i++){
        const playerMove = playerPlay();
        const computerMove = computerPlay();
        console.log( playRound(playerMove, computerMove) );
    }
}

game();