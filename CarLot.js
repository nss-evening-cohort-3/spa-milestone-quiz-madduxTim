var CarLot = (function () {
  var inventory = [];

  return {
    getInventory: function () {
      console.log("getInventory");
    },
    loadInventory: function (callback) {
      var inventoryLoader = new XMLHttpRequest();
      inventoryLoader.open("GET", "inventory.json");
      inventoryLoader.send();
      inventoryLoader.addEventListener("load", function () {
          inventory = JSON.parse(this.responseText).cars;
          callback(inventory);
      });
    }
  };

})();