function Vote_Function() { // Create a function
    var Age, Can_vote; // Establish the Age and Can_vote variables
    Age = document.getElementById("Age").value; // Define the age variable
    Can_vote = (Age < 18) ? "You are too young":"You are old enough"; // Define a variable and add a ternary option
    document.getElementById("Vote").innerHTML = Can_vote + " to vote."; // Display the result
}

function count_Function() { // Create a function
    document.getElementById("Nested_Function").innerHTML = Count(); // Display the result
    function Count() { // Create a nested function
        var Starting_point = 9; // Define the Starting_point variable
        function Plus_one() {Starting_point += 1;} // Create a nested function that adds 1 to the Starting_point variable
        Plus_one(); // Execute the function, adding 1 to Starting_point
        return Starting_point; // Return the result of Starting_point after the Plus_one() function is executed
    }
}

function Vehicle(Make, Model, Year, Color) { // Create a constructor function
    this.Vehicle_Make = Make; // Adding a this keyword
    this.Vehicle_Model = Model; // Adding a this keyword
    this.Vehicle_Year = Year; // Adding a this keyword
    this.Vehicle_Color = Color; // Adding a this keyword
}

var Gustavo = new Vehicle("Ford", "Mustang GT", 2021, "White Platinum"); // Define a variable
function myFunction() { // Create a function
    document.getElementById("New_and_This").innerHTML = // Display the result of the constructor 
    "Gustavo drives a " + Gustavo.Vehicle_Color + "-colored " + // function within an HTML element 
    Gustavo.Vehicle_Make + " " + Gustavo.Vehicle_Model + 
    " manufactured in " + Gustavo.Vehicle_Year + ".";
}