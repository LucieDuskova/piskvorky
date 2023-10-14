import { findWinner } from 'https://unpkg.com/piskvorky@0.1.4';

// f-ce na změnu ikon

let ikon_playerElement = document.querySelector('#ikon_player');

let currentPlayer = 'circle';

const pridejZnak = (event) => {
  if (currentPlayer === 'circle') {
    ikon_playerElement.src = 'cross.svg';
    event.target.classList.add('board__field--circle');
    event.target.disabled = true;
    currentPlayer = 'cross';
  } else if (currentPlayer === 'cross') {
    ikon_playerElement.src = 'circle.svg';
    event.target.disabled = true;
    event.target.classList.add('board__field--cross');
    currentPlayer = 'circle';
  }
// vyber buttony z HTML
  const noveButtons = document.querySelectorAll('.cell');

 // tvorba pole
  const buttonsArray = Array.from(noveButtons);

 // tvorba pole se symbolama
  const buttonsArraySymbol = buttonsArray.map((button2) => {
    if (button2.classList.contains('board__field--circle')) {
      return 'o';
    } else if (button2.classList.contains('board__field--cross')) {
      return 'x';
    } else {
      return '_';
    }
  });

  // vyhodnocení vítěze
  const winnerIs = findWinner(buttonsArraySymbol);

  if (winnerIs === 'o') {
    setTimeout(alert('Vyhrál hráč se symbolem kolečko!'), 300);
  } else if (winnerIs === 'x') {
    setTimeout(alert('Vyhrál hráč se symbolem křížek!'), 300);
  } else if (winnerIs === 'tie') {
    setTimeout(alert('Hra skončila remízou!'), 300);
  }
}; ˇ
// až zde konče f-ce PřidejZnak - teď už i vyhodnocuje

// fuknce na posluchače všech tlačítek

const buttons = document.querySelectorAll('.cell');
buttons.forEach((button) => {
  button.addEventListener('click', pridejZnak);
});

// tlačítko restart hry - otázka
const buttonRestartElement = document.querySelector('#restart');

const restartButton = (event) => {
  const questionRestart = confirm('Opravdu chceš začít znovu?');
  if (questionRestart === false) {
    event.preventDefault();
  }
};


buttonRestartElement.addEventListener('click', restartButton);


