var score, rndScore, actiivePlayer, game;
init();

//console.log(dice);
//document.querySelector('#c' + activePlayer).textContent = dice;
//var x = document.querySelector('#s' + activePlayer).textContent
//console.log(x);


document.querySelector('.btn-roll').addEventListener('click', function() {

    var dice = Math.floor(Math.random() * 6) + 1;

    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';

    if (dice !== 1) {
        rndScore += dice;
        document.getElementById('c' + activePlayer).textContent = rndScore;
    } else {
        dry();
    }

});
document.querySelector('.btn-hold').addEventListener('click', function() {
    score[activePlayer] += rndScore;
    document.getElementById('s' + activePlayer).textContent = score[activePlayer];

    if (score[activePlayer] >= 50) {
        document.getElementById('p' + activePlayer).textContent = 'Winner!!';
        document.querySelector('.dice').style.visiblity = 'hidden';

    } else {
        dry();
    }

});

function dry() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    rndScore = 0;
    document.getElementById('c0').textContent = '0';
    document.getElementById('c1').textContent = '0';
    //document.querySelector('player1').classList.toggle('active');
    //document.querySelector('player2').classList.toggle('active');
    document.querySelector('.dice').style.visiblity = 'hidden';

}

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    score = [0, 0];
    rndScore = 0;
    activePlayer = 0;
    var game = true;
    document.querySelector('.dice').style.visiblity = 'hidden';
    document.getElementById('s0').textContent = '0';
    document.getElementById('s1').textContent = '0';
    document.getElementById('c0').textContent = '0';
    document.getElementById('c1').textContent = '0';
    document.getElementById('p0').textContent = 'Player 1';
    document.getElementById('p1').textContent = 'Player 2';
}