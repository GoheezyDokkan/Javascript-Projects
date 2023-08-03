var X = 10; // Create a global variable
function Add_numbers_1() { // Create a function
    document.write(20 + X + "<br>"); // Display the result
}

function Add_numbers_2() { // Create a function
    var Y = 29 // Create a local variable
    document.write(20 + Y); // Display the result
}

Add_numbers_1(); // Execute a function
Add_numbers_2(); // Execute a function

function intentional_Error() { // Create a function
    var Error = intentional_mistake // Define the value of a variable
}

console.log(intentional_Error()); // Display the result of the intentional_Error function in the console

if (1 < 2) { // Create an if statement
    document.write("<br>The left number is smaller than the number on the right.") // Define what happens if the conditions are met
}

function get_Date() { // Create a function
    if (new Date().getHours() < 18) { // Create an if statement
        document.getElementById("Greeting").innerHTML = "How are you today?"; // Define what happens if the conditions are met
    } else { // Create an else statement if the conditions for the if statement are not met
        document.getElementById("Greeting").innerHTML = "How are you doing this evening?"; // Define what happens if the conditions are not met
    }
}

function Age_Function() { // Create a function
    Age = document.getElementById("Age").value; // Define the value of age
    if (Age >= 18) { // Create an if statement
        Vote = "You are old enough to vote!" // Define what happens if the conditions are met
    }
    else { // Create an else statement if the conditions for the if statement are not met
        Vote = "You are not old enough to vote."; // Define what happens if the conditions are not met
    }
    document.getElementById("How old are you?").innerHTML = Vote; // Display the result
}

function Time_function() { // Create a function
    var Time = new Date().getHours(); // Create and define a variable 
    var Reply; // Create a variable
    if (Time < 12 == Time > 0) { // Create an if statement
        Reply = "It is morning time!"; // Define what happens if the conditions are met
    }
    else if (Time > 12 == Time < 18) { // Create an else if statement
        Reply = "It is afternoon."; // Define what happens if the conditions of the else if statement are met
    }
    else { // Create an else statement
        Reply = "It is evening time."; // Define what happens if the conditions of the if or else if statement are not met
    }
    document.getElementById("Time_of_day").innerHTML = Reply; // Display the result
}