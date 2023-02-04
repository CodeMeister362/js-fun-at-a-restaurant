function nameMenuItem(item) {
  var menuItemName = `Delicious ${item}`;
  return menuItemName;
}

function createMenuItem(menuItemName, initilPrice, type) {
 var menuItem = {
    name: menuItemName,
    price: initilPrice,
    type: type
 }
    return menuItem;
}

function addIngredients(ingredient, array) {
  if(!array.includes(ingredient)){
    array.push(ingredient)
  }
} 

function formatPrice(item) {
  
    return `$${item}`
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  // decreasePrice,
  // createRecipe
}


