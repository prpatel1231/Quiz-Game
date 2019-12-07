//get HTML Element we need to use
var highScoreBtn = document.getElementById("highScores");
var timer = document.getElementById("timer");
var questionContainer = document.getElementById("question");
var answerContainer = document.getElementById("answers")
var startBtn = document.getElementById("startBtn");


//initialize global variables for the game
var score = 0;
var time = 15;
var questionsLeft = 0;

//create array of objects that houses the questions and answers
var questions = [
    {
      title: "Commonly used data types DO NOT include:",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts"
    },
    {
      title: "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses"
    }
  ];

//function to start game on click of start button, return a question from question bank

startBtn.addEventListener("click", function() {
    //reset game variables
    score = 0;
    time = 15;
    questionsLeft = questions.length;
    //set first question of the quiz
    var questionTitle = questions[0].title;
    questionContainer.innerText = questionTitle;
    //remove the start button
    answerContainer.removeChild(startBtn);
    //loop through th answer choices and dynamically create buttons for the respective choices
    var answerChoices = questions[0].choices;
    for (i = 0; i < answerChoices.length; i++) {
        var answerBtn = document.createElement("button");
        answerBtn.setAttribute("class", "btn btn-dark answer");
        answerBtn.innerText = answerChoices[i];
        answerContainer.appendChild(answerBtn);
    };




        
});





  

