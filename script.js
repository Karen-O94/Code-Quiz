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
var startPage = document.querySelector('.row-start');
var questionPage = document.querySelector('#questionDiv')
var startBtn = document.querySelector(".startBtn");
var questionItem = document.getElementById("question-item");
var nextQuestion;
var presentQuestion = 0;
var startCount = 60;
var timerCount = document.getElementById("start-count");
var quizQuestion = document.querySelector("#quiz-questions");
var quizAnswers = document.querySelector("#question-answers");
//Object holding all quiz questions, answers and correct answer
var allQuestions = [
    {
        question: "Commonly used data types do NOT include ___",
        options: ["boolean", "numbers", "string", "prompts"],
        correctAns: "prompts",
    },
    {
        question: "Which tag would you put your block of Javascript code?",
        options: ["<javascript>", "<js>", "<script>", "<section>"],
        correctAns: "<script>",
    },
    {
        question: "What does HTML stand for?",
        options: ["HyperTech Markup Language", "HyperText Markup Language", "HypoText Mark Language"],
        correctAns: "HyperText Markup Language",
    },
    {
        question: "Which property is used to change background colour?",
        options: ["background-colour", "bgcolor", "color"],
        correctAns: "background-colour",
    },
    {
        question: "How do you call a function in Javascript?",
        options: ["function myFunction ()", "function: myFunction()", "myFunction ()"],
        correctAns: "myFunction ()",
    },
];

//Click event added vto start button to begin quiz
startBtn.addEventListener("click",startQuiz);

//The startQuiz() function clears out the start page and begins to load the quiz questions

function startQuiz() {
    startPage.classList.add("d-none");
    questionPage.classList.remove("d-none");
    
    nextQuestion = quizQuestion[presentQuestion];
    startPage.appendChild(questionPage); 
    displayQuestions(allQuestions);
    timerCountDown();
};

function displayQuestions(allQuestions) {
    var i = 0;

   questionItem.innerText = allQuestions.question

    var qOptions = allQuestions[i].options;
    qOptions.forEach(function (item) {
        var optionsBtn = document.createElement("button");
        optionsBtn.className = "btn btn-dark";
        optionsBtn.innerText = item;
        quizAnswers.appendChild(optionsBtn);
        //optionsBtn.addEventListener("click", disNxtQues);

    });
};

//Timer function which countdowns as soon as the start button is clicked
function timerCountDown() {
    var interval = setInterval(function () {
        timerCount.textContent = startCount;
        startCount--;
        if (startCount === 0) {
            clearInterval(interval);
        };
    }, 1000);
};


// function replace() { 
//     document.getElementById("").style.display="none"; 
//     document.getElementById("div2").style.display="block"; 
//     } 