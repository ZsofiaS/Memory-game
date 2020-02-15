let cardsArray1 = ["https://dl.dropboxusercontent.com/s/sraa9m9xsr80kz3/bonsai.svg?dl=0",
                  "https://dl.dropboxusercontent.com/s/psewjon3l31xcau/dragon.svg?dl=0",
                  "https://dl.dropboxusercontent.com/s/xu3umcrw7dcterg/fan.svg?dl=0",
                  "https://dl.dropboxusercontent.com/s/olbzebl31xmkwn7/gate.svg?dl=0",
                  "https://dl.dropboxusercontent.com/s/n4ebrzdsnz0xaac/lantern.svg?dl=0",
                  "https://dl.dropboxusercontent.com/s/uuw97tmxqbbc3y9/fireworks.svg?dl=0",
                  "https://dl.dropboxusercontent.com/s/vr2lt30jihx3f8k/envelope.svg?dl=0",
                  "https://dl.dropboxusercontent.com/s/u012s88ru6lk6bk/drink.svg?dl=0"];
let cardsArray2 = [...cardsArray1];
let cardsArray = cardsArray1.concat(cardsArray2);

let firstClick = null;
let secondClick = null;
let counter = 0;
let cardInners = document.getElementsByClassName("card-inner");
let cardBacks = document.getElementsByClassName("card-back");
let cardFronts = document.getElementsByClassName("card-front");

function restartGame() {
     cardsArray = cardsArray.sort(function(a, b){return 0.5 - Math.random()});
     for (let i=0; i<cardBacks.length; i++) {
        cardBacks[i].style.backgroundImage = "url(" + cardsArray[i] + ")";
      }
    for (let i=0; i<cardInners.length; i++) {
       cardInners[i].style.visibility = "visible";
    }
}

function startGame () {
  cardsArray = cardsArray.sort(function(a, b){return 0.5 - Math.random()});
  for (let i=0; i<cardBacks.length; i++) {
  cardBacks[i].style.backgroundImage = "url(" + cardsArray[i] + ")";
}
for (let i=0; i<cardFronts.length; i++) {
  cardFronts[i].addEventListener("click", function(e) {
    if (firstClick == null) {
      firstClick = e.target.nextElementSibling;
       e.target.parentNode.classList.add("card-inner-active");
    } else if (secondClick == null) {
      secondClick = e.target.nextElementSibling;
       e.target.parentNode.classList.add("card-inner-active");
      if (firstClick.style.backgroundImage == secondClick.style.backgroundImage && firstClick !== secondClick) {
        if (counter < 7)  {
           setTimeout(function() {
          firstClick.parentNode.style.visibility = "hidden";
          secondClick.parentNode.style.visibility = "hidden";
          counter++;
          firstClick = null;
          secondClick = null}, 500);
        } else {
          setTimeout(function() {
          firstClick.parentNode.style.visibility = "hidden";
          secondClick.parentNode.style.visibility = "hidden";
          for (let i=0; i<cardInners.length; i++) {
              cardInners[i].classList.remove("card-inner-active");
            }
          setTimeout(function() {
            let gameOver = document.createElement("h1");
            let startButton = document.createElement("button");
            let gameOverTitle = document.createTextNode("You won!");
            let startText = document.createTextNode("Play again?");
            gameOver.appendChild(gameOverTitle);
            startButton.addEventListener("click", () => {
              gameOver.remove();
              startButton.remove();
              restartGame();
              });
            startButton.appendChild(startText);
            document.body.appendChild(gameOver);
            document.body.appendChild(startButton);
            counter = 0;
            firstClick = null;
            secondClick = null;
          }, 500)}, 500);
        }
      } else  {
         setTimeout(function() {
        firstClick.parentNode.classList.remove("card-inner-active");
        secondClick.parentNode.classList.remove("card-inner-active");
        firstClick = null;
        secondClick = null;}, 400);
      }
    }
})
}
}

startGame();

  
