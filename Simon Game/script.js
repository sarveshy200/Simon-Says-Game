let gamesSeq = [];
let userSeq = [];
let highestScore = [];


let btns = ["yellow", "red", "green", "purple"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");
let h3 = document.querySelector("h3");

document.addEventListener("keypress", function (e) {
  if (started == false) {
    started = true;
    leveUp();
  }
});

function gameFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 250);
}

function userFlash(btn) {
  btn.classList.add("userFlash");
  setTimeout(function () {
    btn.classList.remove("userFlash");
  }, 250);
}

function leveUp() {
  userSeq = [];
  level++;
  h2.innerText = `Level ${level}`;
  let randIndx = Math.floor(Math.random() * 3);
  let randColor = btns[randIndx];
  let randbtn = document.querySelector(`.${randColor}`);
  gamesSeq.push(randColor);
  gameFlash(randbtn);

}

function checkAns(idx) {
  if (userSeq[idx] === gamesSeq[idx]) {
    if (userSeq.length == gamesSeq.length) {
      setTimeout(leveUp, 1000);
    }
  } else {
    h2.innerHTML = `Game over! Your score was <b>${level}</b> press any key to start.`;
    highestScore.push(level);
    const largest = Math.max(...highestScore);
    h3.innerHTML = `Highest score was <b>${largest}</b>.`;
    document.querySelector("body").style.background = "red";
    setTimeout(function () {
      document.querySelector("body").style.background = "white";
    }, 150);
    reset();
  }
}

function btnPress() {
  let btn = this;
  userFlash(btn);
  userColor = btn.getAttribute("id");
  userSeq.push(userColor);
  checkAns(userSeq.length - 1);
}

let allbtns = document.querySelectorAll(".btn");
for (btn of allbtns) {
  btn.addEventListener("click", btnPress);
}

function reset() {
  started = false;
  gamesSeq = [];
  userSeq = [];
  level = 0;
}
