"use strict"
// The second IIFE should augment the original one with a 
// function that creates all of the `eventHandlers` that you need for 
// the application. Name the function `activateEvents`.

function showContent() {
  let carInventory = CarLot.getInventory();
  toDOM(carInventory);
};
function toDOM(inventory) {
  let container= document.getElementById("main-container");
  let string = "";
  for (let i = 0; i < inventory.length; i++) {
      string += `<section class="col-md-4 car" style="border: 2px solid ${inventory[i].color}">`;
      string += `<h5>${inventory[i].make}</h5>`;
      string += `<h5>${inventory[i].model}</h5>`;
      string += `<h5>${inventory[i].year}</h5>`;
      string += `<h5>${inventory[i].price}</h5>`;
      string += `<h5>Color: ${inventory[i].color}</h5>`;
      string += `<h5>${inventory[i].purchased}</h5>`;
      string += `<h5>${inventory[i].description}</h5></section></section>`;
  };
  container.innerHTML = string;
  activateEvents();
};
function activateEvents() {
  console.log("not sure what goes here yet");
};
CarLot.loadInventory(showContent);

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