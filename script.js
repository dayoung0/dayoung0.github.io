//import { addZombie } from './Zombies.js';

let dmgProgressBar = document.getElementById("dmgBuff-bar");
let dmgCollectButton = document.getElementById("dmgBuff-button");

let timeProgressBar = document.getElementById("timeBuff-bar");
let timeCollectButton = document.getElementById("time-buff-button");

let button1 = document.getElementById("slot1");
let button2 = document.getElementById("slot2");
let button3 = document.getElementById("slot3");


let dmgProgress = 0;
let timeProgress = 0;

const startValue = 15;
let clickToWin = 15;
let n = 0;

const clicksRequired = 10; // Change this to the number of clicks required

// Function to update the Damage progress bar
function updateDmgProgressBar() {
  dmgProgressBar.style.height = (dmgProgress / clicksRequired) * 100 + "%";
}

// Function to handle button click
function handleDmgBuffButton() {
  if (dmgProgress < clicksRequired) {
    dmgProgress++;
    updateDmgProgressBar();
    if (dmgProgress >= clicksRequired) {
      dmgCollectButton.disabled = true; // Disable the button when the goal is reached
    }
  }
}

// Function to update the progress bar
function updateTimeProgressBar() {
  timeProgressBar.style.height = (timeProgress / clicksRequired) * 100 + "%";
}

// Function to handle button click
function handleTimeBuffButton() {
  if (timeProgress < clicksRequired) {
    timeProgress++;
    updateTimeProgressBar();
    if (timeProgress >= clicksRequired) {
      timeCollectButton.disabled = true; // Disable the button when the goal is reached
    }
  }
}

function winCondition() {
  if (clickToWin > 0) {
    if (clickToWin % 5 === 0 && startValue !== clickToWin) {
      removeZombie();
      --clickToWin;
      console.log("clicks to win = " + clickToWin);
      console.log(" n = " + n);
    }
    if (clickToWin === 1) {
      console.log("clicks to win = " + clickToWin);
      console.log(" n = " + n);
      --clickToWin;
      n--;
    } else {
      clickToWin--;
      console.log("clicks to win = " + clickToWin);
      console.log(" n = " + n);
    }
  }
  if (clickToWin <= 0 && n <= 0) {
    removeZombie();
  }
}

function startup() {
  addZombie();
  ++n;
}

function addZombie() {
  const newZombie = document.createElement("img");

  newZombie.setAttribute("class", "zombie");
  newZombie.src = "pixel_art_zombie_noBG.png";
  newZombie.setAttribute("id", "zombie" + n);
  newZombie.style.position = "static";
  newZombie.style.width = "150px";
  newZombie.style.height = "auto";

  document.getElementById("imageContainer").appendChild(newZombie);
}
function removeZombie() {
  let temp = "zombie" + (n - 1).toString();
  if (n > 1) {
    document.getElementById(temp).style.display = "none";

    --n;
  } else if (n === 0) {
    --n;
    document.getElementById("zombie0").style.display = "none";
  }
}

function startTimer(){

  let timer = setTimeout(timerFunction, 5000);


}



function timerFunction() {
  console.log("Timer executed!");
  alert("You Lose")
  
}




// Add an event listener to the button
//dmgCollectButton.addEventListener("click", handleDmgBuffButton);
//timeCollectButton.addEventListener("click", handleTimeBuffButton);
button1.addEventListener("click", winCondition);
button2.addEventListener("click", startup);
button3.addEventListener("click", startTimer);
