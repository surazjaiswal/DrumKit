// document.querySelector("button").addEventListener("click",function(){alert("Button Clicked")});
//
// document.querySelectorAll("button")[2].addEventListener("click",function(){alert("Button 3 clicked")});

var numButtons = document.querySelectorAll(".drum").length;
for(var i=0;i<numButtons;i++){
  document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    var inputInnerHTML = this.innerHTML;
    //console.log(inputInnerHTML);
    makeSound(inputInnerHTML);
    buttonAnimation(inputInnerHTML);
  });

function makeSound(inputInnerHTML){
  switch (inputInnerHTML) {
    case "w":
      audio = new Audio("sounds/tom-1.mp3")
      audio.play();
      break;
    case "a":
      audio = new Audio("sounds/tom-2.mp3")
      audio.play();
      break;
    case "s":
      audio = new Audio("sounds/tom-3.mp3")
      audio.play();
      break;
    case "d":
      audio = new Audio("sounds/tom-4.mp3")
      audio.play();
      break;
    case "j":
      audio = new Audio("sounds/snare.mp3")
      audio.play();
      break;
    case "k":
      audio = new Audio("sounds/kick-bass.mp3")
      audio.play();
      break;
    case "l":
      audio = new Audio("sounds/crash.mp3")
      audio.play();
      break;
    default:
      console.log("Pressed wrong key");
  }
}
}

document.addEventListener("keypress",function(){
  //console.log(event.key);
  var keyPress = event.key;
  makeSound(keyPress);
  buttonAnimation(keyPress);
});

function buttonAnimation(currentKey){
  var activeButton = document.querySelector("."+currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },100);
}
