import React from 'react';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';

import { Header } from './components';
import { Home, Cart } from './pages';
import { setPizzas } from './redux/actions/pizzas';

const App = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    // Move to redux and connect Redux-Thunk
    // watch for filtration and sorting and substitude parameters in URL from Redux
    axios.get('http://localhost:3001/pizzas').then(({ data }) => {
      dispatch(setPizzas(data));
    });
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
      </Switch>
    </div>
  );
};

export default App;

// const mapStateToProps = (state) => {
//   return {
//     items: state.pizzas.items,
//     filters: state.filters,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     setPizzas: (items) => dispatch(setPizzasAction(items)),
//   };
// };
// export default connect(mapStateToProps, mapDispatchToProps)(App);
