"use strict"
// Create one global variable (e.g. `CarLot`) and use the IIFE pattern to 
// augment it two times in separate JavaScript files.
// The first IIFE should add a public function (e.g. `loadInventory`) that loads 
// the `inventory.json` file and stores the inventory in a private variable. 
// It should also expose a public getter to read the array of cars (e.g. `getInventory`).

var CarLot = (function () {
  var inventory = [];

  return {
    getInventory: function() {
      console.log("getInventory is working", inventory);
      return inventory;
    },
    loadInventory: function(accessInventory) {
      var inventoryLoader = new XMLHttpRequest();
      inventoryLoader.open("GET", "inventory.json");
      inventoryLoader.send();
      inventoryLoader.addEventListener("load", function () {
        // experiment with "failed" event?
          inventory = JSON.parse(this.responseText).cars;
          accessInventory();
      });
    }
  };
})();

