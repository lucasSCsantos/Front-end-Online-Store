import React from 'react';
import { Route, Switch } from 'react-router';
import Home from './pages/Home'
import ProductPage from './pages/ProductPage'
import ProductsByCategory from './components/ProductsByCategory'
import ProductsBySearch from './components/ProductsBySearch'
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
        <Route
          path="/category/:id"
          exact
          render={ (props) => <ProductsByCategory { ...props } /> }
        />
        <Route
          path="/search/:id"
          exact
          render={ (props) => <ProductsBySearch { ...props } /> }
        />
      </Switch>
    </div>
  );
}

export default App;
