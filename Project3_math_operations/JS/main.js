window.alert(Math.random() * 30); // Creating a window alert

function myFunction1() { // Defining a function and naming it
    var x = 10; // Defining a variable and giving it a value
    var y = 5; // Defining a variable and giving it a value
    document.getElementById("Math").innerHTML = "Addition: " + x + " + " + y + " = " + (x + y); // Putting the value of modulus_operator into HTML element with "Math" id
}

function myFunction2() { // Defining a function and naming it
    var x = 10; // Defining a variable and giving it a value
    var y = 5; // Defining a variable and giving it a value
    document.getElementById("Math2").innerHTML = "Subtraction: " + x + " - " + y + " = " + (x - y); // Putting the value of modulus_operator into HTML element with "Math" id
}

function myFunction3() { // Defining a function and naming it
    var x = 10; // Defining a variable and giving it a value
    var y = 5; // Defining a variable and giving it a value
    document.getElementById("Math3").innerHTML = "Multiplication: " + x + " x " + y + " = " + (x * y); // Putting the value of modulus_operator into HTML element with "Math" id
}

function myFunction4() { // Defining a function and naming it
    var x = 10; // Defining a variable and giving it a value
    var y = 5; // Defining a variable and giving it a value
    document.getElementById("Math4").innerHTML = "Division: " + x + " ÷ " + y + " = " + (x / y); // Putting the value of modulus_operator into HTML element with "Math" id
}

function myFunction5() { // Defining a function and naming it
    var x = 10; // Defining a variable and giving it a value
    var y = 5; // Defining a variable and giving it a value
    document.getElementById("Math5").innerHTML = "Remainder: The remainder of " + x + " ÷ " + y + " is " + (x % y); // Putting the value of modulus_operator into HTML element with "Math" id
}

function myFunction6() { // Defining a function and naming it
    var x = 5; // Defining a variable and giving it a value
    var y = x++; // Incrementing the variable
    document.getElementById("Math6").innerHTML = "Increment: " + y + " with an increment of 1 = " + x; // Putting the value of modulus_operator into HTML element with "Math" id
}

function myFunction7() { // Defining a function and naming it
    var x = 5.25; // Defining a variable and giving it a value
    var y = x--; // Decrementing the variable
    document.getElementById("Math7").innerHTML = "Decrement: " + y + " with a decrement of 1 = " + x; // Putting the value of modulus_operator into HTML element with "Math" id
}