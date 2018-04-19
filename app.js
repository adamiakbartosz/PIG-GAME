var scores, activePlayer, dice, roundScore, gameRun;
gameRun = true;
let diceRoll = document.querySelector('.dice');
let btnRoll = document.querySelector('.btn-roll');
let btnHold = document.querySelector('.btn-hold');
let btnNew = document.querySelector('.btn-new');
startGame();

// Button Roll Event
btnRoll.addEventListener('click', function () {
    if (gameRun) {
        dice = Math.floor(Math.random() * 6) + 1;
        diceRoll.src = "dice-" + dice + ".png";
        diceRoll.style.display = 'block';
        if (dice != '1') {
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            nextPlayer();
        }
    }
});

// Button Hold Event
btnHold.addEventListener('click', function () {
    if (gameRun) {
        document.querySelector('#score-' + activePlayer).textContent = roundScore;
        document.querySelector('#current-' + activePlayer).textContent = '0';
        scores[activePlayer] += roundScore;
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        if (scores[activePlayer] >= 20) {
            document.querySelector('#name-' + activePlayer).textContent = "Winner!";
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            diceRoll.style.display = 'none';
            gameRun = false;
        } else {
            nextPlayer();
        }
    }
});

btnNew = document.querySelector('.btn-new').addEventListener('click', function () {
    startGame();
});

function nextPlayer() {
    roundScore = 0;
    diceRoll.style.display = 'none';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    /*
    if (activePlayer === 0) {
        activePlayer = 1
    } else {
        activePlayer = 0;
    }
    */
}

function startGame() {
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    gameRun = true;
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('#score-0').textContent = '0';
    document.querySelector('#score-1').textContent = '0';
    document.querySelector('#current-1').textContent = '0';
    document.querySelector('#current-0').textContent = '0';
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.add('active');
}
