const initialState = {
  items: [],
  totalPrice: 0,
  totalCount: 0,
};

const getTotalPrice = (arr) => arr.reduce((sum, obj) => obj.price + sum, 0);

const cart = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PIZZA_CART': {
      const currentPizzaItems = !state.items[action.payload.id]
        ? [action.payload]
        : [...state.items[action.payload.id].items, action.payload];

      const newItems = {
        ...state.items,
        [action.payload.id]: {
          items: currentPizzaItems,
          totalPrice: getTotalPrice(currentPizzaItems),
        },
      };

      const objectsToArrays = Object.values(newItems).map((obj) => obj.items);
      const arrayAllPizzas = [].concat.apply([], objectsToArrays);
      const totalPrice = getTotalPrice(arrayAllPizzas);

      return {
        ...state,
        items: newItems,
        totalCount: arrayAllPizzas.length,
        totalPrice,
      };
    }
    case 'REMOVE_CART_ITEM': {
      const currentPizzaItems = state.items[action.payload.id];
      const removedPizzasItems = currentPizzaItems.items.splice(1);

      return {
        ...state,
        items: {
          ...state.items,
          [action.payload.id]: {
            items: removedPizzasItems,
            totalPrice: currentPizzaItems.totalPrice - action.payload.price,
          },
        },
        totalCount: state.totalCount - 1,
        totalPrice: state.totalPrice - action.payload.price,
      };
    }
    case 'ADD_CART_ITEM': {
      const currentPizzaItems = [
        ...state.items[action.payload.id].items,
        state.items[action.payload.id].items[0],
      ];

      return {
        ...state,
        items: {
          ...state.items,
          [action.payload.id]: {
            items: currentPizzaItems,
            totalPrice: state.items[action.payload.id].totalPrice + action.payload.price,
          },
        },
        totalCount: state.totalCount + 1,
        totalPrice: state.totalPrice + action.payload.price,
      };
    }
    case 'DELETE_CART_ITEM': {
      const totalPriceCartItem = state.items[action.payload].totalPrice;
      const totalAmountCartItem = state.items[action.payload].items.length;
      
      delete state.items[action.payload];

      return {
        ...state,
        items: {
          ...state.items,
        },
        totalCount: state.totalCount - totalAmountCartItem,
        totalPrice: state.totalPrice - totalPriceCartItem,
      };
    }
    case 'CLEAR_CART': {
      return initialState;
    }

    default:
      return state;
  }
};

export default cart;
