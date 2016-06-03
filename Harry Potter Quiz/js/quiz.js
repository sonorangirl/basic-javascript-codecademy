//Quiz program - asks a series of questions and keeps track of number of correctly answered questions. Then it displays the number of correct answers and incorrect answers.

var correctAnswers = 0;
var askQuestion;
var resultsCorrect = '<ol>'; 
var resultsIncorrect = '<ol>';
var html = '';


function print(message) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}


//2d array to hold questions and answers

var quizQuestions = [
  ["What house is Harry Potter in?", 'griffindor'],
  ["What is the name of Harry's owl?", 'hedwig'],
  ["What shape is Harry's scar?", 'lightning bolt']
];


//Loop to cycle through questions, Conditional statement checks if answer is correct. Counter keeps track of correct answers

for (var i = 0; i < quizQuestions.length; i++) {
  askQuestion = prompt(quizQuestions[i][0]);
  askQuestion = askQuestion.toLowerCase();
  if (askQuestion === quizQuestions[i][1]) {
    correctAnswers += 1;
    resultsCorrect += '<li>' + quizQuestions[i][0] + ' Answer: ' + quizQuestions[i][1] + '</li>';
  } else {
    resultsIncorrect += '<li>' + quizQuestions[i][0] + ' Answer: ' + quizQuestions[i][1] + '</li>';
  }
}


//Print out number of correct and incorrect answers.

html += '<h2>You answered <strong>' + correctAnswers + '</strong> questions right.</h2>';

//Print out the q's and answers themselves, conditionally check if there are any correct or incorrect sections to display.

if ( correctAnswers >= 1) {
  html += '<h3>You got these questions right: </h3>' + resultsCorrect + '</ol>';
}

if ( correctAnswers < quizQuestions.length) {
  html += '<h3>You got these questions wrong: </h3>' + resultsIncorrect + '</ol>';      
}

print(html);


