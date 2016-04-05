"use strict"

function populatePage(inventory) {
  let container= document.getElementById("main-container");
  let string = "";
  for (let i = 0; i < inventory.length; i++) {
      string += `<section class="col-md-4 car" style="border: solid ${inventory[i].color}">`;
      string += `<h5>${inventory[i].make}</h5>`;
      string += `<h5>${inventory[i].model}</h5>`;
      string += `<h5>${inventory[i].year}</h5>`;
      string += `<h5>${inventory[i].price}</h5>`;
      string += `<h5>Color: ${inventory[i].color}</h5>`;
      string += `<h5>${inventory[i].purchased}</h5>`;
      string += `<h5 class="description">${inventory[i].description}</h5></section></section>`;
  };
  container.innerHTML = string;
  CarLot.activateEvents();
};

CarLot.loadInventory(populatePage);

// ------------------- for now, this is where all my functionality lives ----------------------------//

function selectCar() {
    let cars = document.getElementsByClassName("car");
    let descriptions = document.getElementsByClassName("description");
    for (let i = 0; i < cars.length; i++) {
        let car = cars[i];
        let description = descriptions[i];
        car.addEventListener("click", function(event) {
            console.log("car EL working");
            removeSelected();
            car.classList.add("selected");
            input.value="";
            input.focus();
            bindDescriptionToInput(car, description);
        });
    };
};

function removeSelected() {
    let cars = document.getElementsByClassName("car");
    for (let i = 0; i < cars.length; i++) {
        cars[i].classList.remove("selected");
    };
};

function bindDescriptionToInput(car, description) {
    input.addEventListener("keyup", function(event) {
        if (car.classList.contains("selected")) {
            let userDescription = event.currentTarget.value;
            description.innerHTML = userDescription;
            if (event.keyCode === 13) {
                description.innerHTML = userDescription;
                input.value = "";
            };
        };
    });
};