function getReceipt() {
    // This initializes our string so it can get passed from
    // function to function, growing line by line into a full receipt
    var text1 = "<h3>You Ordered:</h3>";
    var runningTotal = 0;
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName("size");
    var selectedSize = 0;
    // This for loop checks to see which radio button is checked
    for (var i = 0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked) {
            // This variable stores the value of the checked radio button
            var selectedSize = sizeArray[i].value;
            text1 = text1 + selectedSize + "<br>";
        }
    }
    // This if statement checks the selected size and assigns the price accordingly
    if (selectedSize === "Personal Pizza") {
        sizeTotal = 6;
    } else if (selectedSize === "Small Pizza") {
        sizeTotal = 8;
    } else if (selectedSize === "Medium Pizza") {
        sizeTotal = 10;
    } else if (selectedSize === "Large Pizza") {
        sizeTotal = 14;
    } else if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 16;
    }
    // This adds the size total to the running total
    runningTotal = sizeTotal;
    console.log(selectedSize + " = $" + sizeTotal + ".00");
    console.log("size text1: " + text1);
    console.log("subtotal: $" + runningTotal + ".00");
    // These variables will get passed on to each function
    getTopping(runningTotal, text1);
};

// This function gets called when the "Place Order" button is clicked
function getTopping(runningTotal, text1) {
    var toppingTotal = 0;
    var selectedTopping = [];
    var toppingArray = document.getElementsByClassName("toppings");
    // This for loop checks to see which checkboxes are checked
    for (var j = 0; j < toppingArray.length; j++) {
        if (toppingArray[j].checked) {
            // This variable stores the value of the checked checkboxes
            selectedTopping.push(toppingArray[j].value);
            console.log("selected topping item: (" + toppingArray[j].value + ")");
            text1 = text1 + toppingArray[j].value + "<br>";
        }
    }
    // This variable stores the number of toppings selected
    var toppingCount = selectedTopping.length;
    // This if statement checks the number of toppings selected and assigns the price accordingly
    if (toppingCount > 1) {
        toppingTotal = (toppingCount - 1);
    }
    // This adds the topping total to the running total
    runningTotal = (runningTotal + toppingTotal);
    console.log("total selected topping items: " + toppingCount);
    console.log(toppingCount + " topping - 1 free topping = " + "$" + toppingTotal + ".00");
    console.log("topping text1: " + text1);
    console.log("Purchase Total: " + "$" + runningTotal + ".00");
    // This displays the order details in the "Show Order" section
    document.getElementById("showText").innerHTML = text1;
    document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$" + 
    runningTotal + ".00" + "</strong></h3>";
};