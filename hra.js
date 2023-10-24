import { findWinner } from 'https://unpkg.com/piskvorky@0.1.4';



// f-ce na změnu ikon

let ikon_playerElement = document.querySelector('#ikon_player');

let currentPlayer = 'circle';

const pridejZnak = async (event) => {
  if (currentPlayer === 'circle') {
    hrajeAI()
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

  // tvorba pole se symboly
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

  setTimeout(() => {
    if (winnerIs === 'o') {
      setTimeout(alert('Vyhrál hráč se symbolem kolečko!'), 300);
    } else if (winnerIs === 'x') {
      setTimeout(alert('Vyhrál hráč se symbolem křížek!'), 300);
    } else if (winnerIs === 'tie') {
      setTimeout(alert('Hra skončila remízou!'), 300);
    }
  }, 300);
};

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

// pripojeni AI

const hrajeAI = async (buttonsArraySymbol) => {


  // vyber buttony z HTML
  const noveButtons = document.querySelectorAll('.cell');


      // tvorba pole
      const buttonsArray = Array.from(noveButtons);


  buttonsArraySymbol = buttonsArray.map((button2) => {
    if (button2.classList.contains('board__field--circle')) {
      return 'o';
    } else if (button2.classList.contains('board__field--cross')) {
      return 'x';
    } else {
      return '_';
    }
  });




const response = await fetch('https://piskvorky.czechitas-podklady.cz/api/suggest-next-move', {
  method: 'POST',
  headers: {
    'Content-type': 'application/json',
  },
  body: JSON.stringify({
    board: buttonsArraySymbol,
    player: 'x', // Hledá tah pro křížek.
  }),
})



const data = await response.json()
console.log('Jsem pole?', data.position)
// console.log('noveButtons', noveButtons)

const { x, y } = data.position // x bude 0 a y bude 1, protože to je jediné volné políčko. x 0 odpovídá prvnímu sloupci a y 1 druhému řádku.
const gameBoardElement = noveButtons[x + y * 10] // Najde políčko na příslušné pozici.
console.log('Co jsem zač?', gameBoardElement)
gameBoardElement.click() // Simuluje kliknutí. Spustí událost `click` na políčku.
}
