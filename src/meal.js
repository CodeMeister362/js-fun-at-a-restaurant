function nameMenuItem(item) {
  var menuItemName = `Delicious ${item}`;
  return menuItemName;
}

function createMenuItem(item) {
 var menuItemName = {
    name: `${item}`,
    price: 10.99,
    type: "breakfast"
 }
    return menuItemName;
}

function addIngredients(ingredients, array) {
  array.push(ingredients);
  if ("cheese" == true){
    array.filter(addIngredients);
  }
} 


module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  // formatPrice,
  // decreasePrice,
  // createRecipe
}


