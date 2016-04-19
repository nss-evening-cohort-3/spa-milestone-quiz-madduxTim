"use strict"
//The second IIFE should augment the original one with a 
//function that creates all of the `eventHandlers` that you need for 
//the application. Name the function `activateEvents`.

var CarLot = (function(originalCarLot) {
    originalCarLot.activateEvents = function() {
        let cars = document.getElementsByClassName("car");
        let input = document.getElementById("input");
        let descriptions = document.getElementsByClassName("description");
        for (let i = 0; i < cars.length; i++) {
            let car = cars[i];
            car.addEventListener("click", function() {
                CarLot.selectCar(car, 'lightblue');                
            });
        };
        for (let i = 0; i < descriptions.length; i++) {
            let description = descriptions[i];
            input.addEventListener("keydown", function(event) {
                if (description.parentNode.id === "selected") {
                    let userDescription = event.currentTarget.value;
                    description.innerHTML = userDescription;
                };
            });
        };
    }
    return originalCarLot;
})(CarLot || {});