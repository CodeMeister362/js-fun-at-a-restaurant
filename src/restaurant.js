const { restart } = require("nodemon")

  function createRestaurant(restaurant) {
    var restaurant = {
      name: restaurant,
      menus: {
        breakfast: [],

        lunch: [],

        dinner: []
      }
    }
    return restaurant
  }


  function addMenuItem(restaurant, pizzaType) {
    if(pizzaType.type === "lunch" && restaurant.menus.lunch.includes(pizzaType) === false) {
       restaurant.menus.lunch.push(pizzaType)
    } else if (pizzaType.type === "breakfast" && restaurant.menus.breakfast.includes(pizzaType) === false) {
       restaurant.menus.breakfast.push(pizzaType)
    } else if (pizzaType.type === "dinner" && restaurant.menus.breakfast.includes(pizzaType) === false) {
      restaurant.menus.dinner.push(pizzaType)
     }
  }

  
  function removeMenuItem(restaurant, name, type) {
    var result = `No one is eating our ${name} - it has been removed from the ${type} menu!`;
    var error = `Sorry, we don't sell ${name}, try adding a new recipe!`
    for( i = 0; i < restaurant.menus[type].length; i++) {
      if(restaurant.menus[type][i].name === name) {
        restaurant.menus[type].splice([i], 1);
        return result;
      } 
    } return error;
    
  }
      
          
    
  //   console.log(restaurant.menus.breakfast);
  // console.log(restaurant.menus.dinner);
  // console.log(restaurant.menus.lunch);
 
  


module.exports = {
  createRestaurant, 
  addMenuItem,
  removeMenuItem
}