function populatePage (inventory) {
    // Loop over the inventory and populate the page
    console.log(inventory);
    let toDOM = document.getElementById("main-container");
    let string = "";
    for (i = 0; i < inventory.length; i++) {
        string += `<section class="car"><h3>${inventory[i].make}</h3>`;
        string += `<h3>${inventory[i].model}</h3>`;
        string += `<h3>${inventory[i].year}</h3>`;
        string += `<h3>${inventory[i].price}</h3>`;
        string += `<h3>${inventory[i].color}</h3>`;
        string += `<h3>${inventory[i].purchased}</h3>`;
        string += `<h3>${inventory[i].description}</h3></section>`;
    }
    toDOM.innerHTML = string;




  // Now that the DOM is loaded, establish all the event listeners needed
  // CarLot.activateEvents();
}

// Load the inventory and send a callback function to be
// invoked after the process is complete
CarLot.loadInventory(populatePage);