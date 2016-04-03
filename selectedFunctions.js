"use strict"
// The final IIFE should augment the object with two more functions. 
// One function resets the border thickness and background color for 
// each car element back to the original values. The other function 
// changes the thickness of the border of a car element, and changes 
// its background color. The function must accept two arguments.
//     - A car DOM element that was clicked on.
//     - A color name.

var CarLot = (function(originalCarLot) {
    originalCarLot.selectCar = function(inventory) {
        let container = document.getElementById("main-container");
        let bacon = document.getElementsByClassName("car");
        for (let i = 0; i < container.childNodes.length; i++) {
            let clickedCar = container.childNodes[i];
            container.childNodes[i].addEventListener("click", function(event) {
            input.value="";
            input.focus();
            clickedCar.style.background="lightblue";
            clickedCar.style.borderWidth="6px";
            });
        }
    };
    return originalCarLot;
})(CarLot || {});
CarLot.loadInventory(CarLot.selectCar);