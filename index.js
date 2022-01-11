var cards = [
  { id: 1, card: `<div class="card card-1">1</div>` },
  { id: 2, card: `<div class="card card-2">2</div>` },
  { id: 3, card: `<div class="card card-3">3</div>` },
  { id: 4, card: `<div class="card card-4">4</div>` },
  { id: 5, card: `<div class="card card-5">5</div>` },
  { id: 6, card: `<div class="card card-6">6</div>` },
  { id: 7, card: `<div class="card card-7">7</div>` },
  { id: 8, card: `<div class="card card-8">8</div>` },
  { id: 9, card: `<div class="card card-9">9</div>` },
];

var processedCards = JSON.parse(JSON.stringify(cards));
var cardContainer = document.getElementById("card-container");
var isSorted = true;

window.onload = () => {
  loadCards();
};

loadCards = () => {
  cardContainer.innerHTML = "";
  let i = 0;
  console.log(processedCards);
  while (i < processedCards.length) {
    cardContainer.innerHTML += processedCards[i].card;
    ++i;
  }
};
suffleCard = () => {
  console.log("suffle");
  processedCards = processedCards.sort((a, b) => {
    //console.log(a, b);
    return Math.random() - 0.5;
  });
  isSorted = false;
  loadCards();
  //console.log(processedCards);
};
sortCards = () => {
  processedCards = JSON.parse(JSON.stringify(cards));

  if (!isSorted) {
    console.log("sort called");
    loadCards();
  }
  isSorted = true;
};
