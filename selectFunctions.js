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
        car.setAttribute("style", `border:3px solid red; text-align:center; background-color:${backgroundColor}`);
        input.focus();
    },
    originalCarLot.unselectCar = function() {
        let cars = document.getElementsByClassName("car");
        for (let i = 0; i < cars.length; i++) { 
            let car = cars[i];
            if (car.id === "selected") {
                originalCarLot.loadInventory(populatePage);
            };
        };
    }
    return originalCarLot;
})(CarLot || {});
