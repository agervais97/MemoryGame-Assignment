const gameContainer = document.getElementById("game");
let clickedCard = null;
let noClick= false;
let cardsMatched = 0;


const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {

    const newDiv = document.createElement("div");
    newDiv.classList.add(color)


    newDiv.addEventListener("click", handleCardClick);



    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

// TODO: Implement this function!
function handleCardClick(event) {

  // you can use event.target to see which element was clicked
  let currentCard = event.target;
  currentCard.style.backgroundColor = event.target.className;
 

  console.log("you just clicked", event.target);

 if (!clickedCard){
   clickedCard = clickedCard || currentCard;
  }

    else if(clickedCard){
      noClick = true;
      cardOne = clickedCard.className;
      
       if (cardOne === event.target.className){
        cardsMatched += 2;
        clickedCard.removeEventListener("clcik", handleCardClick);
        event.target.removeEventListener("click", handleCardClick);
        clickedCard = null;
        noClick = false;
        if( cardsMatched === 8){
          alert("You WIN!")
        }
      }  else {
        setTimeout(function(){
        console.log('Not a match!')
        clickedCard.style.backgroundColor = "";
        event.target.style.backgroundColor = ""; 
        clickedCard = null; 
        noClick = false; 
        }, 1000);
  }
}
}

// when the DOM loads
createDivsForColors(shuffledColors);