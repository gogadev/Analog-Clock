setInterval(setClock, 1000);

const hourHand = document.querySelector("[data-hour-hand]");
const minuteHand = document.querySelector("[data-minute-hand]");
const secondHand = document.querySelector("[data-second-hand]");
let body = document.querySelector("body");
let clockSound = new Audio("sound/sound1.mp3");
const clock = document.querySelector(".clock");

let val;
val = clock.children;

//console.log(val)

clock.addEventListener("click", onClick);

function onClick(e) {
  if (
    e.target.parentElement === clock &&
    e.target.nextElementSibling === null
  ) {
    e.target = val;

    console.log(val);
  }
}

function setClock() {
  const currentDate = new Date();
  const secondsRatio = currentDate.getSeconds() / 60;
  const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
  const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;
  setRotation(secondHand, secondsRatio);
  setRotation(minuteHand, minutesRatio);
  setRotation(hourHand, hoursRatio);
}

function setRotation(element, rotationRatio) {
  element.style.setProperty("--rotation", rotationRatio * 360);
}

setClock();
