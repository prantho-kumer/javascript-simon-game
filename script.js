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
        console.log("success");
        console.log(gamePattern[currentLevel]);
        


    } else {
        console.log("wrong Correct button is: " + gamePattern[currentLevel]);
        $("#level-title").text("Game Over, Press Any Key to Restart");
    }
}

    
    
// game pattern
function nextSequence(){
    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColour = buttonColors[randomNumber];
    gamePattern.push(randomChosenColour);

    $("#"+randomChosenColour).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);

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









});