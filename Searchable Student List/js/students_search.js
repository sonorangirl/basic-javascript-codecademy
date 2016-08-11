//Creates a search box to search through student records and print them to the screen.

var search;
var student;
var message = '';
var found = false;

function print( message ) {
  var outputDiv = document.getElementById( 'output' );
  outputDiv.innerHTML = message;
}

//function to display student information
function getStudentInformation( student ) {
  var information = '<h2>Student: ' + student.name + '</h2>';
  information += '<p>Track: ' + student.track + '</p>';
  information += '<p>Acheivements: ' + student.acheivements + '</p>';
  information += '<p>Points: ' + student.points + '</p>'; 
  return information;
}


while (true) {
  //prompt the user for a name to search
  search = prompt("What is the student's name? (Type 'quit' to exit)");
  
  if ( search.toLowerCase() === 'quit' || search === null ) {
    break; 
  } 
    
  //check if user enters a valid name
  for ( var i = 0; i < students.length; i++ ) { //cycles through array to get names
     student = students[i];
     if ( search === student.name ) { //checks input against names
       message += getStudentInformation( student ); // += allows for multiple students to be listed
       found = true;
     }
   } //end for loop
   
   //If student name is found print information, if not leave a not found message   
   if ( found ) {
      print( message );
   } else {
      print('<p>Sorry, student not found.</p>');
   }  

  //reset message and found variables to go through while loop again.    
  message = '';
  found = false;

} //endwhile






    
    
