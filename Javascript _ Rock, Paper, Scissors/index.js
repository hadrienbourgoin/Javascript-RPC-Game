/* --- VARIABLES --- */
  const choices = ['✊', '🤚', '✌️'];
  const player1 = document.getElementById('player-1');

  /* 1a. */
  const player2 = document.getElementById('player-2');

  /* 1b. */
  const resultArea = document.getElementById('result-area');

  /* 1c. */
  const playBtn = document.getElementById('play-btn');
  const playBtnrock = document.getElementById('play-btnrock');
  const playBtnpaper = document.getElementById('play-btnpaper');
  const playBtnscissors = document.getElementById('play-btnscissors');
  const scoreboard = document.getElementById('scrboard');

  var scoreA = 0;
  var scoreB = 0;

/* ----------------------------------------------- */

/* --- FUNCTIONS --- */

  const generateChoice = () => {
    let r = Math.floor(Math.random() * 3);
    return choices[r]
  };

  const insertHTML = (choice1, choice2, result) => {
    player1.innerHTML = choice1;
    player2.innerHTML = choice2;
    resultArea.innerHTML = result;
  };

  const decideWinner = (a, b) => {
    if ((a === '✊' && b === '✊') || (a === '🤚' && b === '🤚') || (a === '✌️' && b === '✌️')) {

      /* 3a. */ return "égalité";

    } else if ((a === '✊' && b === '✌️') || (a === '🤚' && b === '✊') || (a === '✌️' && b === '🤚')) {
                scoreA++;
                scoreboard.innerHTML = scoreA + "-" + scoreB;
      /* 3b. */ return "a gagne";

    } else {
                scoreB++;
                scoreboard.innerHTML = scoreA + "-" + scoreB;
      /* 3c. */ return "b gagne";

    }
  };

  const play = (playerchoice) => {
    var choice1 = generateChoice();
    if (playerchoice === 'rock') {
      choice1 = '✊';
    } else if (playerchoice === 'paper') {
      choice1 = '🤚';
    } else if (playerchoice === 'scissors') {
      choice1 = '✌️';
    }
    let choice2 = generateChoice();
    let result = decideWinner(choice1, choice2);

    insertHTML(choice1, choice2, result);

    /*change resultArea font color*/
    resultArea.style.color = 'black';
  };

/* ----------------------------------------------- */

/* --- EVENT LISTENERS --- */

  /* 2. */
  playBtn.addEventListener("click", function() {
    play('random');
  });
  playBtnrock.addEventListener("click", function() {
    play('rock');
  });
  playBtnpaper.addEventListener("click", function() {
    play('paper');
  });
  playBtnscissors.addEventListener("click", function() {
    play('scissors');
  });

/* ------------------------------- */
