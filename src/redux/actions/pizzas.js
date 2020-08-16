import axios from 'axios';

export const setLoaded = (payload) => ({
  type: 'SET_LOADED',
  payload,
});

export const fetchPizzas = (category, sortBy) => (dispatch) => {
  axios
    .get(
      `http://localhost:5000/pizzas?${category > 0 && `category=${category - 1}`}&_sort=${
        sortBy.type
      }&_order=${sortBy.order}`,
    )
    .then(({ data }) => {
      dispatch(setPizzas(data));
      console.log('sorting', sortBy);
    });
};

export const setPizzas = (items) => ({
  type: 'SET_PIZZAS',
  payload: items,
});
