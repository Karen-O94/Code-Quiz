// var startQuiz = document.getElementsByClassName("startBtn")
//Pseudo code
// When the 'Start Quiz' button is clicked, it should trigger a series of questions. 
//Thus an event listener is required. You need to attach a click and a function
//Parameters need to be set for answers. that is if answer is correct or wrong, this will be displayed on next screen
//Timer needs to be created to countdown as soon as quiz is started
//time is substracted from the clock when a question is answered wrong
//when all questions are answered or timer reaches zero, the game ends (game over screen appears)
//when game is over, it goes to another page for user to enter initials and save game

//what to use? set interval, DOM manipulation, for loops, setInterval & clearInterval, functions and preventDefault

//Variables
var startQuiz = document.querySelector(".startBtn");
var startCount = 60;
var timerCount = document.getElementById("start-count");

var allQuestions = [
    {
        questions: "Commonly used data types do NOT include ___",
        answers: ["boolean", "numbers", "string", "prompts"],
        correctAns: "prompts",
    },
    {
        questions: "Which tag would you put your block of Javascript code?",
        answers: ["<javascript>", "<js>", "<script>", "<section>"],
        correctAns: "<script>",
    },
    {
        questions: "What does HTML stand for?",
        answers: ["HyperTech Markup Language", "HyperText Markup Language", "HypoText Mark Language"],
        correctAns: "HyperText Markup Language",
    },
    {
        questions: "Which property is used to change background colour?",
        answers: ["background-colour", "bgcolor", "color"],
        correctAns: "background-colour",
    },
    {
        questions: "How do you call a function in Javascript?",
        answers: ["function myFunction ()", "function: myFunction()", "myFunction ()"],
        correctAns: "myFunction ()",
    },
]



startBtn.addEventListener("click", function startQuiz() {
    alert("Quiz has started")
});


// Questions
// 1. Commonly used data types do NOT include ___
// -boolean
// -numbers
// -String
// -prompts

// 2.Which tag would you put your block of Javascript code?
// - <javascript>
// - <js>
// - <script>
// - <section>

// 3. What does HTML stand for?
// - HyperTech Markup Language
// -HyperText Markup Language
// - HypoText Mark Language

// 4. Which property is used to change background colour?
// -background-colour
// -bgcolor
// -color

// 5.How do you call a function in Javascript?
// - function myFunction ()
// - function: myFunction()
// - myFunction ()

//set timer - using variable starCount and timerCount

function timerCountDown () {
    var interval = setInterval( function () {
        timerCount.textContent = startCount;
        startCount--;
        if (startCount === 0) {
            clearInterval(interval);
        };
    }, 1000);
};

