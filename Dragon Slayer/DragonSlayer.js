var slaying = true;

var youHit = Math.floor(Math.random() * 2);

var damageCaused = Math.floor(Math.random()*5 + 1);

var totalDamage = 0;

function slayTheDragon() {
    while(slaying) {
        if (youHit = true) {
            
            console.log("Ya! You hit the dragon!");
            totalDamage = totalDamage += damageCaused;
            
            if (totalDamage >= 4) {
                console.log("You slew the dragon!");
                slaying = false;
            } else {
                youHit = Math.floor(Math.random() * 2);
                slaying = true;
            }
            
        } else {
            console.log("You were burnt to a crisp.");
        };
        
    slaying = false;
    };
};

slayTheDragon();