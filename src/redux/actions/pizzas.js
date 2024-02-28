import {getPizzasImitate} from "../../util/getPizzasImitate"

export const setLoaded = (payload) => ({
  type: 'SET_LOADED',
  payload,
});

export const fetchPizzas = (category, sortBy) => (dispatch) => {
	dispatch(setLoaded(false));

	getPizzasImitate(category, sortBy)
    .then(({ data }) => {
      dispatch(setPizzas(data));
    });
};

export const setPizzas = (items) => ({
  type: 'SET_PIZZAS',
  payload: items,
});
