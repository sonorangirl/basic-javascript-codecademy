/*
1.Must ask 5 questions
2.Keep track of number of correctly answered questions
3.Let the user know after the quiz the final number of q's they got correct
4.Rank the player
  a.All five - gold
  b.3-4 - silver
  c.1-2 - bronze
  d- 0 - nothing
*/



//User starts with 0 correct answers
var correctAnswers = 0;

//Ask questions then add to score if correct.
var q1 = prompt("What is Bilbo's last name?"); 
if (q1.toLowerCase() === 'baggins') {
  correctAnswers += 1;
}

var q2 = prompt("Where do Hobbits live?"); 
if (q2.toLowerCase() === 'the shire') {
  correctAnswers += 1;
}

var q3 = prompt("How old is Bilbo at the beginning of LOTR?"); 
if (q3.toLowerCase() === '110') {
  correctAnswers += 1;
}

var q4 = prompt("How many members of the Company are there?"); 
if (q4.toLowerCase() === '9') {
  correctAnswers += 1;
}

var q5 = prompt("Where is the final destination of the ring?"); 
if (q5.toLowerCase() === 'mount doom') {
  correctAnswers += 1;
}

//Display rank using value of correctAnswers
if (correctAnswers === 5) {
  alert("You've answered all five questions right! Gold for you, LOTR superfan!");
} else if (correctAnswers === 4) {
  alert("You've answered four questions right, you know your LOTR trivia! Silver for you!");
} else if (correctAnswers === 3) {
  alert("You've answered three questions right, Silver for you!");
} else if (correctAnswers === 2) {
  alert("You've only answered two questions right, I know what book you should read next. Bronze for you!");
} else if (correctAnswers === 1) {
  alert("You've only answered one question right, I know what book you should read next. Bronze for you!");
} else {
  alert("Have you even heard of the Lord of the Rings?");
}



