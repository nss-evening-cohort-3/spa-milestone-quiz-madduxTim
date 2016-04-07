"use strict"
//The second IIFE should augment the original one with a 
//function that creates all of the `eventHandlers` that you need for 
//the application. Name the function `activateEvents`.

var CarLot = (function(originalCarLot) {
    originalCarLot.activateEvents = function() {
        CarLot.selectCar();
        CarLot.bindDescriptionToInput();
    }
    return originalCarLot;
})(CarLot || {});