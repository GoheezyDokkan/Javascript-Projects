function myFunction() { // Defining a function and naming it
    var str1 = "Boo! "; // Defining a variable and giving it a string value
    var str2 = "Did I scare you?"; // Defining another variable and giving it a string value
    var concatenate = str1 + str2; // Concatenating the two variables together
    document.getElementById("button_text").innerHTML = concatenate; // Putting the value of concatenate into HTML element with "button_text" id
}

function myFunction2() { // Defining a function and naming it
    var sentence = "I am learning"; // Defining a variable and giving it a string value
    sentence += " a lot from this book!"; // Concatenating the two variables together
    document.getElementById("Concatenate").innerHTML = sentence; // Putting the value of sentence into HTML element with "Concatenate" id
}