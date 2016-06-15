//Create function for generating random numbers between two numbers, lower and upper. Then display the vaules.

function randomNumber( lower, upper ) {
  if ( isNaN(lower) || isNaN(upper) ) {
    throw new Error('You cannot use a string for either value, must be a number!');
  } else {
    return Math.floor(Math.random() * (upper - lower + 1) + lower ); 
  }
}


document.write( randomNumber(1, 1000) + "<br/>");
document.write( randomNumber(14, 720) + "<br/>");
document.write( randomNumber(25, 'fifty') + "<br/>");
document.write( randomNumber(300, 400) + "<br/>");