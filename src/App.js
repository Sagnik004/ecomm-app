import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import NavigationMenu from './Components/NavigationMenu/NavigationMenu';
import ProductsLists from './Components/ProductsList/ProductsList';
import Login from './Components/Login/Login';
import Cart from './Components/Cart/Cart';

function App() {
  return (
    <BrowserRouter>
      <NavigationMenu />

      <Switch>
        <Route path="/" exact>
          <ProductsLists />
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/cart" exact>
          <Cart />
        </Route>
        <Route>404 - Page not Found</Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
