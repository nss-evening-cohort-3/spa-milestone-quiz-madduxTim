"use strict"
// The final IIFE should augment the object with two more functions. 
// One function resets the border thickness and background color for 
// each car element back to the original values. The other function 
// changes the thickness of the border of a car element, and changes 
// its background color. The function must accept two arguments.
//     - A car DOM element that was clicked on.
//     - A color name.

var CarLot = (function(originalCarLot) {
    originalCarLot.selectCar = function(car, backgroundColor) {
        let input = document.getElementById("input");
        originalCarLot.unselectCar();
        car.setAttribute("id", "selected");
        car.setAttribute("style", `border-width:7px; 
            border-color:${car.childNodes[4].childNodes[0].nextSibling.textContent}; 
            border-style:dotted; text-align:center; background-color:${backgroundColor}`);
        input.focus();
    },
    originalCarLot.unselectCar = function() {
        let cars = document.getElementsByClassName("car");
        let inventory = CarLot.getInventory();
        for (let i = 0; i < cars.length; i++) { 
            let carColor = inventory[i].color;
            let car = cars[i];
            if (car.id === "selected") {
                document.getElementById("input").value = "";
                car.removeAttribute("id");
                car.setAttribute("style", `border-color:${carColor}; border-style:solid; 
                    text-align:center; background-color:white`)
            };
        };
    }
    return originalCarLot;
})(CarLot || {});
