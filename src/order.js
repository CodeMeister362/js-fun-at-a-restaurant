function takeOrder(orders, deliveryOrders) {
  if(deliveryOrders.length < 3)
  deliveryOrders.push(orders);
}



function refundOrder(order1, deliveryOrders) {
  for(var i = 0; i < deliveryOrders.length; i++){
    if(deliveryOrders[i].orderNumber === order1) {
       return deliveryOrders.splice([i], 1);
      } 
  }
}

 function listItems(deliveryOrders) {
  var items = [];
  for (var i = 0; i < deliveryOrders.length; i++) {
    items.push(deliveryOrders[i].item); 
  }
  return items.join(", ");
 }
 
 function searchOrder(deliveryOrders, someOrder) {
  for ( var i = 0; i < deliveryOrders.length; i++) {
    if(deliveryOrders[i].item === someOrder) {
      return true
    }
    }
    return false
  }


module.exports = {
   takeOrder,
  refundOrder,
  listItems,
  searchOrder
}