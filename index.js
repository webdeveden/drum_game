// making sound using button

var numberEvents = document.querySelectorAll(".drum").length;
for (i = 0; i < numberEvents; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    // changing the clicked button' color
    // getting the sound depending on the button pressed
    // if (this.innerHTML === "w") {
    //   var tom1 = new Audio("./sounds/tom-1.mp3");
    //   tom1.play();
    // } else if (this.innerHTML === "a") {
    //   var tom2 = new Audio("./sounds/tom-2.mp3");
    //   tom2.play();
    // }
    // or we can switch statement
    var buttontInnerHTML = this.innerHTML;
    makeSound(buttontInnerHTML);
    buttonAnimation(buttontInnerHTML);
  });
}

//making sound using keypress

document.addEventListener("keydown", function (event) {
  makeSound(event.key); // return a corespondat string of the key pressed
  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("./sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("./sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("./sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("./sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var tom2 = new Audio("./sounds/snare.mp3");
      tom2.play();
      break;
    case "k":
      var crash = new Audio("./sounds/crash.mp3");
      crash.play();
      break;
    case "l":
      var kick = new Audio("./sounds/kick-bass.mp3");
      kick.play();
      break;

    // work has the else statement
    default:
      alert(buttontInnerHTML);
      break;
  }
}

function buttonAnimation(curentKey) {
  var activeButton = document.querySelector("." + curentKey);
  //   after defining the css property of the pressed class we add it to our letter class
  activeButton.classList.add("pressed");

  //seting up a delay time before we remove the animation on a key pressed
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
