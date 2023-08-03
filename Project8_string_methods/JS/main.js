function full_Sentence() { // Create a function
    var part_1 = "I have "; // Define the part_1 variable
    var part_2 = "made this "; // Define the part_2 variable
    var part_3 = "into a complete "; // Define the part_3 variable
    var part_4 = "sentence."; // Define the part_4 variable
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence; // Display the result
}

function slice_Method() { // Create a function
    var Sentence = "All work and no play makes Johnny a dull boy"; // Define the Sentence variable
    var Section = Sentence.slice (27, 33); // Slice all characters from the sentence except 27-33
    document.getElementById("Slice").innerHTML = Section; // Display the result
}

function string_Method() { // Create a function
    var X = 182; // Define the X variable
    document.getElementById("Numbers_to_string").innerHTML = X.toString(); // Display the result
}

function precision_Method() { // Create a function
    var X = 12938.3012987376112; // Define a variable 
    document.getElementById("Precision").innerHTML = X.toPrecision(10); // Display the result
}