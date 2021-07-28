import React from 'react';
import { Route, Switch } from 'react-router';
import Home from './pages/Home'
import ProductPage from './pages/ProductPage'
import Header from './components/Header';
import Categories from './components/Categories';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Categories />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route
          path="/product/:id"
          exact
          render={ (props) => <ProductPage { ...props } /> }
        />
      </Switch>
    </div>
  );
}

export default App;
