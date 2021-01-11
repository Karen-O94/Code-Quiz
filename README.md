# Code-Quiz
The aim of this project was to create a simple quiz with mutliple choice answers about coding against a timer. By selecting one of the multiple choices, the user is redirected to the next series of questions/answers. 

We had to ensure the application was fully functioning and applied the aforementioned criteria

## First Steps: Pseudocoding & Styling HTML page 
Before attempting to code the Javascript file, I took some time to pseudocode a flow chart of how I wanted the application to work based on the client's user story. 

The client's first criteria was the a series of questions and answer option would appear on the screen when a user clicked the 'Start Quiz!' button and the buttons holding the answer choices.

I started off styling the HTML page mainly using Bootstrap and adding CSS of my own to position my Bootstrap inherited classes exactly how I envisioned. 


## Second steps: Declaring intial global variables & using DOM Methods
After pseudocoding, I proceeded to declaring the variables that I thought I would need to store my starting page, my quiz questions and click events(`addEventListener()`) to trigger a series of events when buttons were clicked. I used DOM methods such as `document.queryselector()`, `.createElement()` and `.appendChild` to to manipulate the HTML document such as targetting the specific elements I wanted, creating new elements and appending them to the page

## Third Steps: Functions
**Starting the Quiz**
I identified I would need to create a function to start the quiz and set a timer which will countdown as soon as the quiz was started . I used DOM methods to target elements that I wanted to change once a function was called. I found it easier to write each function separately as its own entity and then calling them in another corresponding function. 
. 

**Generating the next series of questions**
Thi function I worked took the longest to work on as I had to ensure any time a button was clicked, it will clear the current question page and move to another question page. I used `d-none` class,  `classList` and `.add/.remove` methods to current page elements and then I appended the new element holding the other questions using a `forEach` loop.

## Difficulties and troubleshooting
Organizing: One of the main difficulties I find with Javascript is figuring out how to organise my code for it to flow logically. I'm hoping with time  this will come naturally to me with more practice. 

Functions and how to use them:  I really struggled with figuring out how to write my functions in a way to generate the end result I wanted. Although I knew the general concept of what to use, it was very difficult to implement and this was without a doubt the hardest part of this project.

I used console.log, Chrome DevTools, YouTube and peer reviews to troubleshoot what was going wrong and what direction to take to fix these issues. 

****
Unfortunately I did not have time to write the code to store the user's score and allow them to save their game using `localStorage`. This will be the next step in improving the functionality of this game.  

**Built With**
- HTML
- Bootstrap
- CSS
- JavaScript 
This site was deployed with [GitHub Pages] (https://karen-o94.github.io/Code-Quiz/)
![deployedcodequiz](https://user-images.githubusercontent.com/74797740/104138612-14457800-539d-11eb-8031-a9afcd2c5bd6.png)

**Credits**
My wonderful peers who dedicated time to helping me troubleshoot issues and encouraged me to keep going:
- [Alisha Saleh] (https://github.com/AlishaSaleh)
- [Livvy Owen] (https://github.com/oliviaowen1)


