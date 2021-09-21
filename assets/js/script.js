var startPageEl = document.querySelector("#start");
var headerEl = document.querySelector("#header");
var startButtonEl = document.querySelector("#btn-start");
var pageContentEl = document.querySelector("#page-content");
var timerEl = document.querySelector("#timer");
var flexContainerEl = document.querySelector("#container");

var questionOne = {
    question: "Commonly used data types DO NOT include:",
    one: "1: Strings",
    two: "2: Booleans",
    three: "3: Alerts",
    four: "4: Numbers",
    correct: "3",
};
var questionTwo = {
    question: "The condition in an if/else statement is enclosed with _________.",
    one: "1: Quotes",
    two: "2: Curly Brackets",
    three: "3: Parenthesis",
    four: "4: Square Brackets",
    correct: "3",
};
var questionThree = {
    question: "Arrays in Javascript can be used to store ________.",
    one: "1: Numbers and Strings",
    two: "2: Other Arrays",
    three: "3: Booleans",
    four: "4: All of the above",
    correct: "4"
};
var questionFour = {
    question: "String values must be enclosed within ________ when being assigned to variables.",
    one: "1: Commas",
    two: "2: Curly Brackets",
    three: "3: Quotes",
    four: "4: Parenthesis",
    correct: "3"
};
var questionFive = {
    question: "A very useful tool during development and debugging for printing content to the debugger is:",
    one: "1: Javascript",
    two: "2: terminal/bash",
    three: "3: for loops",
    four: "4: console.log",
    correct: "4"
};

var questions = [questionOne, questionTwo, questionThree, questionFour, questionFive];
var currentQuestion = 0;

var createQuestion = function(questions) {
    // remove startPageEl
    startPageEl.remove();

    // create <div> with the class of .question
    var questionContainerEl = document.createElement("div");
    questionContainerEl.className = "question";
    // append the div to the flex container
    flexContainerEl.appendChild(questionContainerEl);

    // create <h1> with text content of questions[i].question
    var askQuestionEl = document.createElement("h1");
    askQuestionEl.textContent= questions.question;
    // append to div
    questionContainerEl.appendChild(askQuestionEl);

    // create <a> with the text content of questions[i].1 and an id="1"
    var answerOneEl = document.createElement("a");
    answerOneEl.textContent = questions.one;
    answerOneEl.setAttribute("id", "1");
    answerOneEl.className = "answer";
    // apend to div
    questionContainerEl.appendChild(answerOneEl);

    // create <a> with the text content of questions[i].2 and an id="2"
    var answerTwoEl = document.createElement("a");
    answerTwoEl.textContent = questions.two;
    answerTwoEl.setAttribute("id", "2");
    answerTwoEl.className = "answer";
    // append to div
    questionContainerEl.appendChild(answerTwoEl);

    // create <a> with the text content of questions[i].3 and an id="3"
    var answerThreeEl = document.createElement("a");
    answerThreeEl.textContent = questions.three;
    answerThreeEl.setAttribute("id", "3");
    answerThreeEl.className = "answer";
    // append to div
    questionContainerEl.appendChild(answerThreeEl);

    // create <a> with the text content of questions[i].4 and an id="4"
    var answerFourEl = document.createElement("a");
    answerFourEl.textContent = questions.four;
    answerFourEl.setAttribute("id", "4");
    answerFourEl.className = "answer";
    //append to div
    questionContainerEl.appendChild(answerFourEl);

    // append div to the body
    pageContentEl.appendChild(flexContainerEl);

}

timer = function() {
    var time = timerEl.textContent;
    var timeLeft = setInterval(function() {
        if (time > 0){
            timerEl.textContent = time;
            time--;
        } else {
            alert("Time is up!");
        }
    }, 1000);
}

var startQuiz = function(event) {
    timerEl.textContent = 75;
    timer();

    createQuestion(questions[currentQuestion]);
}

var answerHandler = function(event) {
    var targetEl = event.target
    if (targetEl.matches(".answer")) {
        checkAnswer(targetEl);
    };
}

var checkAnswer = function(answerSubmitted) {
    if (answerSubmitted.id === questions[currentQuestion].correct) {
        console.log("Correct");
        var correctEl = document.createElement("h2");
        correctEl.className = "answer-status";
        correctEl.textContent = "Correct!";
        flexContainerEl.appendChild(correctEl);
        setTimeout(function() {
            correctEl.remove()
        }, 3000);
        nextQuestion();
    } else {
        console.log("Incorrect");
        var incorrectEl = document.createElement("h2");
        incorrectEl.className = "answer-status";
        incorrectEl.textContent = "Wrong!";
        flexContainerEl.appendChild(incorrectEl);
        setTimeout( function() {
            incorrectEl.remove()
        }, 3000);
        wrongAnswer();
        nextQuestion();
    }
}

var wrongAnswer = function() {
    var newTime = timerEl.textContent;
    newTime = newTime - 10;
    timerEl.textContent = newTime;
}

var nextQuestion = function() {
    currentQuestion = currentQuestion + 1;
    console.log(currentQuestion);
    if (currentQuestion > 4) {
        endGame();
    } else {
        document.querySelector(".question").remove();
        createQuestion(questions[currentQuestion]);
    }
}

var endGame = function() {
    document.querySelector(".question").remove();

    var endContainerEl = document.createElement("div");
    endContainerEl.className = "question";

    var doneEl = document.createElement("h1");
    doneEl.textContent = "All Done!";
    endContainerEl.appendChild(doneEl);

    var finalScoreEl = document.createElement("h2");
    finalScoreEl.textContent = "Your final score is " + timerEl.textContent + " .";
    endContainerEl.appendChild(finalScoreEl);

    var formContainerEl = document.createElement("div");
    formContainerEl.className = "form-container";
    endContainerEl.appendChild(formContainerEl);
    
    var inputTitleEl = document.createElement("h2");
    inputTitleEl.textContent = "Enter your initials:";
    formContainerEl.appendChild(inputTitleEl);

    var inputFieldEl = document.createElement("input");
    inputFieldEl.className = "inputField";
    formContainerEl.appendChild(inputFieldEl);

    var submitButtonEl = document.createElement("button");
    submitButtonEl.setAttribute("id", "submit-score");
    submitButtonEl.textContent = "Submit";
    formContainerEl.appendChild(submitButtonEl);

    flexContainerEl.appendChild(endContainerEl);
}

var submitScore = function(event) {
    var tagetEl = event.target;

    if (tagetEl.matches("#submit-score")) {
        var finalScore = {
            score: timerEl.textContent,
            name: document.querySelector("input").value,
        }
        localStorage.setItem("score", JSON.stringify(finalScore));
    }
}

var viewScores = function(event) {
    var targetEl = event.target;
    
    if (targetEl.matches("#view-scores")) {
        startPageEl.remove();

        var highScore = localStorage.getItem("score");
        highScore = JSON.parse(highScore);

        var scoreEl = document.createElement("h3");
        scoreEl.textContent = highScore.name + " - " + highScore.score;
        flexContainerEl.appendChild(scoreEl);

        var scoreTitleEl = document.createElement("h1");
        scoreTitleEl.textContent = "Highscore";
        flexContainerEl.appendChild(scoreTitleEl);
    }
}

headerEl.addEventListener("click", viewScores);
flexContainerEl.addEventListener("click", submitScore);
startButtonEl.addEventListener("click", startQuiz);
pageContentEl.addEventListener("click", answerHandler);
