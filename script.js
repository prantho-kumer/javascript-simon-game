$(document).ready(function(){


var buttonColors = ["red", "blue","green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var started = false;
var level = 0;

    


// start the game on keypress
$(document).keypress(function(){
    if(!started){
        started = true;
        $("#level-title").text("Level " + level);
        nextSequence();
    }
});

    

// button clicked
$("div.btn").click(function(){
    var userChosenColour = this.id;
    userClickedPattern.push(userChosenColour);
    $("#"+this.id).fadeIn(100).fadeOut(100).fadeIn(100);
    animatePress(userChosenColour);
    playSound(userChosenColour);
    checkAnswer(userClickedPattern.length-1);

    console.log(userClickedPattern);
    console.log(gamePattern);
});    

// check user answer against game nextSequence
function checkAnswer(currentLevel) {

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
      if (userClickedPattern.length === gamePattern.length){
        setTimeout(function () {
          nextSequence();
        }, 1000);
        }
        console.log(userClickedPattern.length-1);
    } else {
      playSound("wrong");
      $("body").addClass("game-over");
      $("#level-title").text("Game Over, Press Any Key to Restart");

      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);
console.log(userClickedPattern.length-1);
      startOver();
    }
}

    
    
// game pattern
    function nextSequence() {
        userClickedPattern = [];
        level++;
        $("#level-title").text("Level " + level);
    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColour = buttonColors[randomNumber];
    gamePattern.push(randomChosenColour);

    $("#"+randomChosenColour).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
console.log(userClickedPattern.length-1);

    console.log("game started: "+ started);
    }



// play sound
function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

// button shadow
function animatePress(currentColour){
    $("#"+currentColour).addClass("pressed");
    setTimeout(function(){
        $("#"+currentColour).removeClass("pressed");
    }, 100);
}

//start over
    function startOver() {
        level = 0;
        gamePattern = [];
        started = false;

    }
    console.log(gamePattern);
    console.log(userClickedPattern);
    






});