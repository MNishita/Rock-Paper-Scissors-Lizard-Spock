'use strict';
const computerScore = document.getElementById('computer-score');
const userScore = document.getElementById('user-score');

const gameStartContainer = document.getElementById('game-start');
const gameRulesContainer = document.getElementById('game-rules');
const gameResultContainer = document.getElementById('game-result');

const hands = document.getElementById('hands');

const btnGameStart = document.getElementById('btn-game-start');
const btnGameRules = document.getElementById('btn-game-rules');
const img = document.getElementById('image');
const closeBtn = document.getElementById('close-btn');

const computerChoice = document.getElementById('computer-choice');
const userChoice = document.getElementById('user-choice');
const resultMessage = document.getElementById('result');

let cScore = 0;
let uScore = 0;
let result = 0;

const gameStart = function() {
    computerScore.innerText = cScore;
    userScore.innerText = uScore;

    gameResultContainer.classList.remove('hidden');
    gameStartContainer.classList.add('hidden');
    hands.classList.remove('hidden');
    gameRulesContainer.classList.add('hidden');
}

const closeButton = function() {
    img.style.display = 'none';
}

const gameRules = function() {
    img.src = "../images/Rules.jpeg";
    img.style.display = 'block';
    img.addEventListener('click',closeButton);
}

const gameWin = function(userSelected, computerSelected) {
    uScore++;
    result = 'YOU WON';
    updateDom(userSelected,computerSelected,result);
    return;
}

const gameLose = function(userSelected, computerSelected) {
    cScore++;
    result = 'YOU LOSE';
    updateDom(userSelected,computerSelected,result);
    return;
}

const gameLogic = function(userSelected, computerSelected) {
    if(userSelected === computerSelected) {
        result = 'DRAW';
        updateDom(userSelected,computerSelected,result);
        return;
    }
    else if(userSelected === 'rock') {
        if(computerSelected === 'paper' || computerSelected === 'spock') {
            gameLose(userSelected,computerSelected);
            return;
        }
        else {
            gameWin(userSelected,computerSelected);
            return;
        }
    }
    else if(userSelected === 'paper') {
        if(computerSelected === 'scissors' || computerSelected === 'lizard') {
            gameLose(userSelected,computerSelected);
            return;
        }
        else {
            gameWin(userSelected,computerSelected);
            return;
        }
    }
    else if(userSelected === 'scissors') {
        if(computerSelected === 'rock' || computerSelected === 'spock') {
            gameLose(userSelected,computerSelected);
            return;
        }
        else {
            gameWin(userSelected,computerSelected);
            return;
        }
    }
    else if(userSelected === 'lizard') {
        if(computerSelected === 'rock' || computerSelected === 'scissors') {
            gameLose(userSelected,computerSelected);
            return;
        }
        else {
            pScore++;
            gameWin(userSelected,computerSelected);
            return;
        }
    }
    else if(userSelected === 'spock') {
        if(computerSelected === 'paper' || computerSelected === 'lizard') {
            gameLose(userSelected,computerSelected);
            return;
        }
        else {
            gameWin(userSelected,computerSelected);
            return;
        }
    }
}

const updateDom = function(userSelected,computerSelected,result) {
    computerScore.innerText = cScore;
    userScore.innerText = uScore;
    computerChoice.innerHTML = `Computer choose <strong>${computerSelected.toUpperCase()}</strong>`;
    userChoice.innerHTML = `You choose <strong>${userSelected.toUpperCase()}</strong>`;
    if(result === 'YOU WON') {
        resultMessage.innerHTML = `${result} <i style="font-size: 2rem;padding-left: 0.5rem" class="fas fa-thumbs-up"></i>`;
    }
    else if(result === 'YOU LOSE') {
        resultMessage.innerHTML = `${result} <i style="font-size: 2rem;padding-left: 0.5rem;" class="fas fa-thumbs-down"></i>`;
    }
    else {
        resultMessage.innerText = result;
    }
}

const check = function(input) {
    let userSelected = input;
    const choices = ['rock', 'paper', 'scissors','lizard', 'spock'];
    const num = Math.trunc(Math.random()*5);

    const computerSelected = choices[num];

    gameLogic(userSelected, computerSelected);

    resultMessage.classList.remove('hidden');
}

btnGameStart.addEventListener('click',gameStart);
btnGameRules.addEventListener('click',gameRules);