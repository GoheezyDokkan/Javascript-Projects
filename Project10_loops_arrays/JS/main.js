function count_To_Ten() {
  var Digit = "";
  var X = 1;
  while (X < 11) {
    Digit += "<br>" + X;
    X++;
  }
  document.getElementById("Counting_to_ten").innerHTML = Digit;
}

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {
  for (Y = 0; Y < Instruments.length; Y++) {
    Content += Instruments[Y]+ "<br>";
  }
  document.getElementById("List_of_instruments").innerHTML = Content;
}

// Function utilizing a while loop
function sumWithWhileLoop(n) {
  let sum = 0;
  let i = 1;

  // Calculate the sum of numbers from 1 to n using a while loop
  while (i <= n) {
    sum += i;
    i++;
  }

  return sum;
}

// Function utilizing a for loop
function sumWithForLoop(n) {
  let sum = 0;

  // Calculate the sum of numbers from 1 to n using a for loop
  for (let i = 1; i <= n; i++) {
    sum += i;
  }

  return sum;
}

// Function utilizing an array
function findMaxValue(arr) {
  let maxValue = arr[0];

  // Loop through the array to find the maximum value
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxValue) {
      maxValue = arr[i];
    }
  }

  return maxValue;
}

// Create an object using the let keyword
let person = {
  name: "John",
  age: 30,
  occupation: "Engineer",
};

// Functions to display results upon clicking the content in any <p> tag
function showSumWithWhileLoop() {
  const result = sumWithWhileLoop(5);
  document.getElementById("output").innerHTML = "Sum with while loop: " + result;
}

function showSumWithForLoop() {
  const result = sumWithForLoop(5);
  document.getElementById("output").innerHTML = "Sum with for loop: " + result;
}

function showMaxValue() {
  const arr = [10, 5, 20, 15, 30];
  const result = findMaxValue(arr);
  document.getElementById("output").innerHTML = "Max value in the array: " + result;
}

function showPerson() {
  document.getElementById("output").innerHTML = "Person: " + JSON.stringify(person);
}
