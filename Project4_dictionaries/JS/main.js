function myDictionary() { // Created a function called myDictionary
    var Animal = { // Created an Animal object
        Species: "Dog", // Added a species property to the Animal object
        Color: "Black", // Added a color property to the Animal object
        Breed: "Labrador", // Added a breed property to the Animal object
        Age: 5, // Added an age property to the Animal object
        Sound: "Bark!"  // Added a sound property to the Animal object
    }
    delete Animal.Sound; // Deletes the Sound property from the Animal object
    document.getElementById("Dictionary").innerHTML = Animal.Sound; // Displays the Sound property from the Animal object
}