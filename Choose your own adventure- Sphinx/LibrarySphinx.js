var answer = prompt("You're wandering through a vast library when you encounter a door at the back of the room. Upon opening you encounter a Sphinx. The shipnx tells you to answer his riddle in order to pass. Do you SOLVE the riddle, FIGHT the sphinx, PAY the sphinx to pass, or CLOSE the door?); ").toUpperCase();

switch(answer) {
    case 'SOLVE':
        var smart = prompt("Are you smart? (Yes or No?)").toUpperCase();
        var logical = prompt("Are you logical? (Yes or No?)").toUpperCase();
        if (smart || logical == "YES") {
            console.log("Great job solving the riddle! You can pass.");
        } else {
            console.log("You failed to solve the riddle, the Sphinx devours you.");
        }
    break;
    
    case 'FIGHT':
        var courageous = prompt("Are you courageous? (Yes or No?)").toUpperCase();
        var sword = prompt("Do you have the magical sword that is the only weapon that can defeat sphinx's? (Yes or No?)").toUpperCase();
        if (courageous && sword == "YES") {
            console.log("Wow, you defeated the sphinx...but now you have to guard the door forever.");
        } else {
            console.log("The sphinx is too mighty for you, he places your head nearby as a warning to others.");
        }
    break;
    
    case 'PAY':
        var card = prompt("Do you have a library card? (Yes or No?)").toUpperCase();
        if (card == "YES") {
            console.log("Great, show the sphinx your card as payment and be on your way to explore the beyond!!");
        } else {
            console.log("The sphinx doesn't allow you to pass, and why don't you have a library card if your in a library?");
        }
    break;
    
    case 'CLOSE':
        var boring = prompt("Aren't you intriguied by what may be beyond the Sphinx? (Yes or No?)").toUpperCase();
        var bathroom = prompt("Were you just looking for the bathroom? (Yes or No?)").toUpperCase();
        if (boring || bathroom != "YES") {
            console.log("Then you should have picked another option! Also the bathroom is down the hall to the left.");
        } else {
            console.log("Fine, you close the door and live with regret for the rest of your life, always wondering what may have been beyond the Sphinx.");
        }
    break;
    
    default:
        console.log("I didn't understand your choice, do you SOLVE, FIGHT, PAY, or CLOSE");
    break;
}

