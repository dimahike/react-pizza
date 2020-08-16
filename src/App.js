import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Header } from './components';
import { Home, Cart } from './pages';


const App = () => {
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
