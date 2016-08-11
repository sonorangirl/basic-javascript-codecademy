//Creates student records and prints them to a webpage

var html = '';

function print(message) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}


//Create arrays for student information
var students = [
  {
    name: 'Neville',
    track: 'HTML',
    acheivements: 4,
    points: 145
  },
  {
    name: 'Harry',
    track: 'Ruby',
    acheivements: 35,
    points: 2342
  },
  {
    name: 'Ron',
    track: 'Python',
    acheivements: 62,
    points: 5784
  },
  {
    name: 'Luna',
    track: 'CSS',
    acheivements: 12,
    points: 674
  },
  {
    name: 'Harry',
    track: 'PHP',
    acheivements: 53,
    points: 2431
  },
  {
    name: 'Hermione',
    track: 'JavaScript',
    acheivements: 112,
    points: 20442
  }
];


//print student records to webpage

//for ( var i = 0; i < students.length; i++ ) {
//  
//  html += '<h2>Student: ' + students[i].name + '</h2>';
//  html += '<h3>Track: ' + students[i].track + '</h3>';
//  html += '<p>Acheivements: ' + students[i].acheivements + '</p>';
//  html += '<p>Points: ' + students[i].points + '</p>'; 
//  
//  print( html );
//}






