"use strict"

function populatePage(inventory) {
    let container = document.getElementById("inside-container");
    let string = "";
    for (let i = 0; i < inventory.length; i++) {
        string += `<section class="col-md-4 car" style="text-align:center;`;
        string += ` border:solid ${inventory[i].color}">`;
        string += `<h5>${inventory[i].make}</h5>`;
        string += `<h5>${inventory[i].model}</h5>`;
        string += `<h5>${inventory[i].year}</h5>`;
        string += `<h5>${inventory[i].price}</h5>`;
        string += `<h5>Color: <span>${inventory[i].color}<span></h5>`;
        string += `<h5>${inventory[i].purchased}</h5>`;
        string += `<h5 class="description">${inventory[i].description}</h5></section></section>`;
    };
    container.innerHTML = string;
    CarLot.activateEvents();
}
CarLot.loadInventory(populatePage);