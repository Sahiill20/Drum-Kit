


for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    playSound(this.innerHTML);
  });
}

document.addEventListener("keypress", function (event) {
  
  playSound(event.key);
});

function playSound(key) {
  switch (key) {
    case "w":
      sound1 = new Audio("sounds/crash.mp3");
      sound1.play();
      break;
    case "a":
      sound2 = new Audio("sounds/kick-bass.mp3");
      sound2.play();
      break;
    case "s":
      sound3 = new Audio("sounds/snare.mp3");
      sound3.play();
      break;
    case "d":
      sound4 = new Audio("sounds/tom-1.mp3");
      sound4.play();
      break;
    case "j":
      sound5 = new Audio("sounds/tom-2.mp3");
      sound5.play();
      break;
    case "k":
      sound6 = new Audio("sounds/tom-3.mp3");
      sound6.play();
      break;
    case "l":
      sound7 = new Audio("sounds/tom-4.mp3");
      sound7.play();
      break;
    default:
      console.log(key);
      break;
  }
}
