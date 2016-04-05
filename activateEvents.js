"use strict"
// The second IIFE should augment the original one with a 
// function that creates all of the `eventHandlers` that you need for 
// the application. Name the function `activateEvents`.

var CarLot = (function(originalCarLot) {
  originalCarLot.activateEvents = function() {
    console.log("activateEvents IIFE working.");
    selectCar();
    // bindDescriptionToInput(car, description);
  }

  return originalCarLot;
})(CarLot || {});