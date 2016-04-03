"use strict"
// The second IIFE should augment the original one with a 
// function that creates all of the `eventHandlers` that you need for 
// the application. Name the function `activateEvents`.

function makeCarsShow() {
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
}
CarLot.loadInventory(makeCarsShow);