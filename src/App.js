import React from 'react';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';

import { Header } from './components';
import { Home, Cart } from './pages';
import { setPizzas as setPizzasAction } from './redux/actions/pizzas';

// function App() {
//   useEffect(() => {
//     axios.get('http://localhost:3001/pizzas').then(({ data }) => {
//       setPizzas(data);
//     });
//   }, []);

//   return;
// }

class App extends React.Component {
  componentDidMount() {
    axios.get('http://localhost:3001/pizzas').then(({ data }) => {
      this.props.setPizzas(data);
    });
  }
  render() {
    return (
      <div className="wrapper">
        <Header />
        <Switch>
          <Route exact path="/">
            <Home items={this.props.items} />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.pizzas.items,
    filters: state.filters,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setPizzas: (items) => dispatch(setPizzasAction(items)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
