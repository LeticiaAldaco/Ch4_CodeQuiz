var questions = document.getElementById("questions");
var timer = document.getElementById("time");
var scoreText = document.getElementById("score");
var startBtn = document.getElementById("startBtn");
var greetings = document.querySelector(".greetings");
var textQuestion = document.getElementById("textQuestion");
var quizQuestions = document.querySelector(".quizQuestions");
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
  greetings.style.display = "none";
  timer.style.textContent = "Time: 60";
  console.log("hello");
  countdown();
  quizQuestions.style.display = "flex";
}

// Timer countdown
function countdown() {
  var timerInterval = setInterval(function () {
    if (timeLeft > 1) {
      timer.textContent = timeLeft + "seconds";
      timeLeft--;
    } else if (timeLeft === 1) {
      timer.textContent = timeLeft + "second";
      timeLeft--;
    } else {
      timer.textContent = "";
      clearInterval(timerInterval);
      displayMessage();
    }
  }, 1000);
  showQuestions();
}

// Question Loop
var questions = [
  {
    title: "What language is used to create web pages?",
    choices: ["HTML", "CSS", "JavaScript", "All of the above"],
    answer: "All of the above",
  },
  {
    title: "Which of the following is the largest?",
    choices: ["H1", "H2", "H3", "H4"],
    answer: "H1",
  },
  {
    title: "Which langage is the most commonly used to style a page?",
    choices: ["MongoDB", "GraphQL", "CSS", "MySQL"],
    answer: "CSS",
  },
];

function showQuestions() {
  textQuestion.textContent = questions[nextQuestion].title;
  button1.textContent = questions[nextQuestion].choices[0];
  button2.textContent = questions[nextQuestion].choices[1];
  button3.textContent = questions[nextQuestion].choices[2];
  button4.textContent = questions[nextQuestion].choices[3];
}

var prevQuestion = questions.length - 1;
var nextQuestion = 0;
var score = 0;

function checkAnswer(buttonNum) {
  console.log(buttonNum);

  if (
    questions[nextQuestion].choices[buttonNum - 1] ==
    questions[nextQuestion].answer
  ) {
    score++;
    alert("BINGO!");
  } else {
    alert("NOPE!");
    timeLeft -= 20;
  }
  if (nextQuestion < prevQuestion) {
    nextQuestion++;
    showQuestions();
  } else {
    timer.style.display = "none";
  }
}

// Go Back

var back = document.getElementById("back");
back.addEventListener("click", goBack);
function goBack() {
  location.reload();
  return false;
}

// User initials

var initialsInput = document.getElementById("userInitials");
var initialsList = document.querySelector("showScore");

// High Scores
var submitBtn = document.getElementById("initialButton");

function submit() {
  localStorage.setItem("name", initialsInput.value);
  highScores();
}

// Scoreboard
function highScores() {}

startBtn.addEventListener("click", startQuiz);
submitBtn.addEventListener("click", submit);
