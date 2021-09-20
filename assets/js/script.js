var startPageEl = document.querySelector("#start");
var startButtonEl = document.querySelector("#btn-start");
var pageContentEl = document.querySelector("#page-content");
var timerStart = 75;

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

var createQuestion = function() {
    // remove startPageEl
    startPageEl.remove();
    // create flexbox container for the question
    var flexContainer = document.createElement("div");
    flexContainer.className = "question-container";
    // create <div> with the class of .question
    var questionContainer = document.createElement("div");
    questionContainer.className = "question";
    // append the div to the flex container
    flexContainer.appendChild(questionContainer);
    // create <h1> with text content of questions[i].question
    var askQuestion = document.createElement("h1");
    askQuestion.textContent= questions[0].question;
    // append to div
    questionContainer.appendChild(askQuestion);
    // create <a> with the text content of questions[i].1 and an id="1"
    var answerOne = document.createElement("a");
    answerOne.textContent = questions[0].one;
    answerOne.setAttribute("id", "1");
    // apend to div
    questionContainer.appendChild(answerOne);
    // create <a> with the text content of questions[i].2 and an id="2"
    var answerTwo = document.createElement("a");
    answerTwo.textContent = questions[0].two;
    answerTwo.setAttribute("id", "2");
    // append to div
    questionContainer.appendChild(answerTwo);
    // create <a> with the text content of questions[i].3 and an id="3"
    var answerThree = document.createElement("a");
    answerThree.textContent = questions[0].three;
    answerThree.setAttribute("id", "3");
    // append to div
    questionContainer.appendChild(answerThree);
    // create <a> with the text content of questions[i].4 and an id="4"
    var answerFour = document.createElement("a");
    answerFour.textContent = questions[0].four;
    answerFour.setAttribute("id", "4");
    //append to div
    questionContainer.appendChild(answerFour);

    // append div to the body
    pageContentEl.appendChild(flexContainer);
}

var startQuiz = function(event) {
    createQuestion();
}
startButtonEl.addEventListener("click", startQuiz);

// createQuestion();
