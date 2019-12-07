//get HTML Element we need to use
var highScoreBtn = document.getElementById("highScores");
var timer = document.getElementById("timer");
var questionContainer = document.getElementById("question");
var answerContainer = document.getElementById("answers");
var startBtn = document.getElementById("startBtn");
var resultElement = document.getElementById("result");

//initialize global variables for the game
var score = 0;
var time = 15;
var questionsLeft = 0;
var questionIndex = 0;

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
    questionsLeft = questions.length - 1;
    questionIndex = 0;
    //set first question of the quiz
    var questionTitle = questions[questionIndex].title;
    questionContainer.innerText = questionTitle;
    //remove the start button
    answerContainer.removeChild(startBtn);
    createQuestion();
});
    
function createQuestion(){
    //loop through th answer choices and dynamically create buttons for the respective choices
    var answerChoices = questions[questionIndex].choices;
    for (i = 0; i <= answerChoices.length; i++) {
        var answerBtn = document.createElement("button");
        answerBtn.setAttribute("class", "btn btn-dark answer");
        answerBtn.innerText = answerChoices[i];
        answerContainer.appendChild(answerBtn);
    };
};


//event function to check whether the clicked answer button is correct, update score and move to next question
//use event delegation to create an event listener over all dynamically created answer buttons

answerContainer.addEventListener("click", function(event){
    var guess = event.target.innerText;
    correctAnswer = questions[questionIndex].answer;

    //if no more questions are left then exist
    if (questionsLeft = 0){
        return false
    }
    //check if guess = answer, update score and increment to next question
    if (guess === correctAnswer){
        score++;
        questionIndex++;
        questionsLeft--;
        resultElement.textContent = "Correct!";
        createQuestion();
    }
    else {
        questionIndex++;
        questionsLeft--;
        resultElement.textContent = "Wrong!";
        createQuestion()
    }
    
})



 






        






  

