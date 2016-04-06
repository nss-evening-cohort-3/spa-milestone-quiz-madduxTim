"use strict"
// The final IIFE should augment the object with two more functions. 
// One function resets the border thickness and background color for 
// each car element back to the original values. The other function 
// changes the thickness of the border of a car element, and changes 
// its background color. The function must accept two arguments.
//     - A car DOM element that was clicked on.
//     - A color name.

var CarLot = (function(originalCarLot) {
    originalCarLot.selectCar = function() {
            let input = document.getElementById("input");
            let cars = document.getElementsByClassName("car");
            let descriptions = document.getElementsByClassName(
                "description");
            for (let i = 0; i < cars.length; i++) {
                let car = cars[i];
                let description = descriptions[i];
                car.addEventListener("click", function() {
                    CarLot.removeSelected();
                    car.classList.add("selected");
                    input.value = "";
                    input.focus();
                });
            }
        },
        originalCarLot.removeSelected = function() {
            let cars = document.getElementsByClassName("car");
            for (let i = 0; i < cars.length; i++) {
                cars[i].classList.remove("selected");
            }
        },
        originalCarLot.bindDescriptionToInput = function(car,
            description) {
            let cars = document.getElementsByClassName("car");
            let descriptions = document.getElementsByClassName(
                "description");
            for (let i = 0; i < cars.length; i++) {
                let car = cars[i];
                let description = descriptions[i];
                input.addEventListener("keyup", function(event) {
                    if (car.classList.contains("selected")) {
                        let userDescription = event.currentTarget
                            .value;
                        description.innerHTML = userDescription;
                    }
                })
            }
        }
    return originalCarLot;
})(CarLot || {});