// f-ce na změnu ikon + posluchač polí

const cell_1Element = document.querySelector("#cell_1")
const cell_2Element = document.querySelector("#cell_2")
const cell_3Element = document.querySelector("#cell_3")
const cell_4Element = document.querySelector("#cell_4")
const cell_5Element = document.querySelector("#cell_5")
const cell_6Element = document.querySelector("#cell_6")
const cell_7Element = document.querySelector("#cell_7")
const cell_8Element = document.querySelector("#cell_8")
const cell_9Element = document.querySelector("#cell_9")
const cell_10Element = document.querySelector("#cell_10")
let ikon_playerElement = document.querySelector("#ikon_player")

let currentPlayer = 'circle'


const pridejZnak = (event) => {
  if(currentPlayer === "circle"){
    ikon_playerElement.src = "cross.svg"
    event.target.classList.add("board__field--circle")
    event.target.disabled = true
    return currentPlayer = "cross"
  }else if (currentPlayer === "cross"){
    ikon_playerElement.src = "circle.svg"
    event.target.disabled = true
    event.target.classList.add("board__field--cross")
    return currentPlayer = "circle"
  }
}

cell_1Element.addEventListener("click", pridejZnak)
cell_2Element.addEventListener("click", pridejZnak)
cell_3Element.addEventListener("click", pridejZnak)
cell_4Element.addEventListener("click", pridejZnak)
cell_5Element.addEventListener("click", pridejZnak)
cell_6Element.addEventListener("click", pridejZnak)
cell_7Element.addEventListener("click", pridejZnak)
cell_8Element.addEventListener("click", pridejZnak)
cell_9Element.addEventListener("click", pridejZnak)
cell_10Element.addEventListener("click", pridejZnak)





// tlačítko restart hry - otázka
const buttonElement = document.querySelector('#restart')

const restartButton = (event) => {
  const questionRestart = confirm('Opravdu chceš začít znovu?');
  if (questionRestart === false) {
    event.preventDefault()
  }
 } 

 buttonElement.addEventListener('click', restartButton) 
