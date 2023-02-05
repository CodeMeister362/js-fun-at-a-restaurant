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
    }
  }
  

module.exports = {
  createRestaurant, 
  addMenuItem,
  // removeMenuItem
}