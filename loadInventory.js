function populatePage (inventory) {
    // Loop over the inventory and populate the page
    let toDOM = document.getElementById("main-container");
    let string = "";
    for (let i = 0; i < inventory.length; i++) {
        string += `<section class="col-md-4"><h5>${inventory[i].make}</h5>`;
        string += `<h5>${inventory[i].model}</h5>`;
        string += `<h5>${inventory[i].year}</h5>`;
        string += `<h5>${inventory[i].price}</h5>`;
        string += `<h5>Color: ${inventory[i].color}</h5>`;
        string += `<h5>${inventory[i].purchased}</h5>`;
        string += `<h5>${inventory[i].description}</h5></section>`;
    };
    toDOM.innerHTML = string;
};
// Put a border around the car information that matches the color of the car.
 function addBorder(inventory) {
    let carColors = document.getElementsByTagName("section");
    for (let i = 0; i < carColors.length; i++) {
       carColors[i].style.border = `2px solid ${inventory[i].color}`;
    };
};

// When you click on one of the car elements change the width of the border to a higher value, 
// and change the background color to any other color of your choosing. Also, on click of the car element, clear the value of the text input in the navbar, and put the 
// cursor in the text input. 
document.querySelector("body").addEventListener("click", function(event){
    removeSelect();
    if (event.target.className === "col-md-4") {
        event.target.setAttribute("id", "selected");
        // event.target.style.background = "lightgray";
        // event.target.style.border = "6px dotted red";
    } else if (event.target.parentNode.className === "col-md-4") {
        event.target.parentNode.setAttribute("id", "selected");
        // event.target.parentNode.style.background = "lightgray";
        // event.target.parentNode.style.border = "6px dotted red";
    };
});

function removeSelect() {
    let carList = document.getElementsByClassName("col-md-4");
    for (let i = 0; i < carList.length; i++) {
        // carList[i].classList.remove("col-md-4");
        carList[i].removeAttribute("id", "selected");
    }
};

// When you start typing into the navbar's text input, the description of the currently selected car
// should be bound to what you are typing in and match it exctly. 

// DON'T FORGET TO ADD JUST A LITTLE BIT OF STYLING. MAYBE GET BORDER-BOXING
// WORKING AT LEAST. 

CarLot.loadInventory(populatePage);
CarLot.loadInventory(addBorder);
// CarLot.loadInventory(selectionIndicator);
