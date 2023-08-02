function myFunction() {
    document.getElementById("Function1").innerHTML = (typeof true);
}

function myFunction2() {
    document.getElementById("Function2").innerHTML = ("10" + 5);
}

console.log(2 + 2); // Console log for simple addition

console.log(2 > 10); // Console log looking for a boolean false

console.log(10 == 10); // Console log looking for a boolean true

console.log(3 == 11); // Console log looking for a boolean false

console.log(10 === 10); // Console log looking for a boolean true

console.log("string" === 11); // Console log looking for a boolean false via 
                              // comparison of different data types with different values

console.log(10 === "10"); // Console log looking for a boolean false via 
                          // comparison of different data types with the same value

console.log(10 === 5); // Console log looking for a boolean 
                       // false via comparison of the same data type with different values

function not_Function() { // Defining a function
    document.getElementById("Not").innerHTML = !(20 > 10); // Utilizing the ! operator to return a boolean false
}

function not_Function2() { // Defining a function
    document.getElementById("Not2").innerHTML = !(5 > 10); // Utilizing the ! operator to return a boolean true
}

function main() { // Defining a function
    document.getElementById("main").innerHTML = (5 > 2 && 10 > 4); // Console log looking for a boolean true via the && operator
}

function main2() { // Defining a function
    document.getElementById("main2").innerHTML = (5 > 10 && 10 > 4); // Establishing a causality condition utilizing the && operator that returns a boolean false
}

function main3() { // Defining a function
    document.getElementById("main3").innerHTML = (5 > 10 || 10 > 4); // Establishing a causality condition utilizing the || operator that returns a boolean true
}

function main4() { // Defining a function
    document.getElementById("main4").innerHTML = (5 > 10 || 10 > 20); // Establishing a causality condition utilizing the || operator that returns a boolean false
}

document.write(typeof true);
