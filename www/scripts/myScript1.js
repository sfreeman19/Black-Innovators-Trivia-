// This is a JavaScript file
var points = 0; 
var current; 
function ScoreUp(){
    current = 15; 
    points = points + current;
    document.getElementById("scoreCard").innerHTML = "Score: " + points + " Points";
 
}
function ScoreDown(){
    current = 15;
    points = points - current;
    document.getElementById("scoreCard").innerHTML = "Score: " + points + " Points";
    
}
function Navigate(pageName){
    window.location = pageName;
}
function Incorrect(){
    //Grab the element we want to manipulate
    var wrongAnswer = document.getElementById("wrong1");
    wrongAnswer.style.color = "red";
    ScoreDown();
    
}
function Incorrect2(){
    var wrongAnswer = document.getElementById("wrong2");
    wrongAnswer.style.color = "red";
    ScoreDown();
  
}
function Incorrect3(){
     var wrongAnswer = document.getElementById("wrong3");
     wrongAnswer.style.color = "red";
     ScoreDown();
}
function Correct(){
    var correctAnswer = document.getElementById("correct");
    correctAnswer.style.color = "green";
    ScoreUp();
    Navigate("ques2.html"); 
}
