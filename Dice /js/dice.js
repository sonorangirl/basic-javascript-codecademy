 function Dice(sides) {
  this.sides = sides;
}

Dice.prototype.roll = function() {
    var randomNumber = Math.floor(Math.random() * this.sides) + 1;
    console.log(randomNumber);
    return randomNumber;
}

var dice = new Dice(6);