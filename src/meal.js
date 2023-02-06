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


function decreasePrice(oldPrice) {
  var multiplyPrice = (oldPrice * .10)
  var subtractPrice = (oldPrice - multiplyPrice)
  return subtractPrice
}


function createRecipe( title, ingredients, menuItemType) {
  var recipe = {
    title: title,
    ingredients: ingredients,
    type: menuItemType
  }
  return recipe
}


module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}


