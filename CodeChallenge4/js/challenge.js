
// Part 1: Create a new div of class "planet" and set its background color
// to the color of your choice.  Then, append it to the body in the DOM.

    //New "planet" div with a set background color
    var planet = document.createElement("div");
    planet.className = "planet";  
    planet.style.background = "green";

    
    //Append the "planet" div to the "body" in the DOM 
    document.body.appendChild(planet);


// Part 2: Create a new div of class "moon" and append it to the planet in the DOM.


    //New "moon" div
    var moon = document.createElement("div");
    moon.className = "moon";
    
    
    //Append the "moon" div to the "planet" in the DOM
    planet.appendChild(moon);