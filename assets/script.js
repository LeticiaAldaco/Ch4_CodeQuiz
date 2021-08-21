var questions = document.getElementById("questions");
var timer = document.getElementById("time");
var scoreText = document.getElementById("score");
var startBtn = document.getElementById("startBtn");
var greetings = document.querySelector("greetings");
var textQuestion = document.getElementById("textQuestion");
var quizQuestions = document.querySelector("quizQuestions");
var userInitials = document.getElementById("userInitials");

//Answers
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var button4 = document.getElementById("button4");

// var questionArr = [{question:}]
var timeLeft = 60;

//Display timer and start countdown when button pressed
function startQuiz() {
  greeting.style.display = "none";
  timer.style.textContent = "Time: 60";
  console.log("hello");
  countdown();
  quizQuestions.style.display = "flex";
}
