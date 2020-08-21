export const addPizzaToCart = (pizzaObj) => ({
  type: 'ADD_PIZZA_CART',
  payload: pizzaObj,
});

export const removeCartItem = (pizzaObj) => ({
  type: 'REMOVE_CART_ITEM',
  payload: pizzaObj,
});

export const addCartItem = (pizzaObj) => ({
  type: 'ADD_CART_ITEM',
  payload: pizzaObj,
});

export const deleteCartItems = (pizzaObj) => ({
  type: 'DELETE_CART_ITEM',
  payload: pizzaObj,
});

export const clearCart = () => ({
  type: 'CLEAR_CART',
});

