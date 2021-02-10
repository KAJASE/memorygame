//card opitions
const cardsArray = [
  {
    name: 'fries',
    img: 'imgs/fries.png'
  },
  {
    name: 'cheeseburger',
    img: 'imgs/cheeseburger.png'
  },
  {
    name: 'ice-cream',
    img: 'imgs/ice-cream.png'
  },
  {
    name: 'pizza',
    img: 'imgs/pizza.png'
  },
  {
    name: 'milkshake',
    img: 'imgs/milkshake.png'
  },
  {
    name: 'hotdog',
    img: 'imgs/hotdog.png'
  },
  {
    name: 'fries',
    img: 'imgs/fries.png'
  },
  {
    name: 'cheeseburger',
    img: 'imgs/cheeseburger.png'
  },
  {
    name: 'ice-cream',
    img: 'imgs/ice-cream.png'
  },
  {
    name: 'pizza',
    img: 'imgs/pizza.png'
  },
  {
    name: 'milkshake',
    img: 'imgs/milkshake.png'
  },
  {
    name: 'hotdog',
    img: 'imgs/hotdog.png'
  },
]

cardsArray.sort(() => 0.5 - Math.random())
console.log(cardsArray)

const grid = document.querySelector('.grid');
const resultDisplay = document.getElementById('result')
let cardsChosen = [];
let cardsChosenIds = [];
let cardsWon = [];

function createBoard(){
  for (let i = 0; i < cardsArray.length; i++){
    const card = document.createElement('img')
    card.setAttribute('src', 'imgs/blank.png')
    card.setAttribute('data-id', i)
    card.addEventListener('click', flipCard)
    grid.appendChild(card)
  }
}



function flipCard(){
  let cardId = this.getAttribute('data-id')
  cardsChosen.push(cardsArray[cardId].name)
  cardsChosenIds.push(cardId)
  this.setAttribute('src', cardsArray[cardId].img)
  if(cardsChosen.length === 2){
    setTimeout(checkForMatch, 500)
  }
  
}
function checkForMatch(){
  const cards = document.querySelectorAll('img')
  const optionOneId = cardsChosenIds[0]
  const optionTwoId = cardsChosenIds[1]

  if(optionOneId == optionTwoId)
  {
    alert('You have clicked the same image!')
    cards[optionOneId].setAttribute('src', 'imgs/blank.png')
    cards[optionTwoId].setAttribute('src', 'imgs/blank.png')
  } else if (cardsChosen[0] === cardsChosen[1]) {
    alert('You have found a match!')
    cards[optionOneId].setAttribute('src', 'imgs/white.png')
    cards[optionTwoId].setAttribute('src', 'imgs/white.png')
    cards[optionOneId].removeEventListener('click', flipCard)
    cards[optionTwoId].removeEventListener('click', flipCard)
    cardsWon.push(cardsChosen)
  } else {
    cards[optionOneId].setAttribute('src', 'imgs/blank.png')
    cards[optionTwoId].setAttribute('src', 'imgs/blank.png')
    alert('Sorry, try again!')
  }
  cardsChosen = [];
  cardsChosenIds = []; 
  resultDisplay.textContent = cardsWon.length
  if(cardsWon.length === cardsArray.length/2) {
    resultDisplay.textContent = ' Congratulations, you have won!'
  }

}

createBoard()