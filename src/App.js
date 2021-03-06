import React, { useEffect } from 'react';
import { Route, Switch, useLocation } from 'react-router';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
import ProductsByCategory from './components/ProductsByCategory';
import ProductsBySearch from './components/ProductsBySearch';
import Header from './components/Header';
import Footer from './components/Footer';
import Categories from './components/Categories';
import Cart from './pages/Cart';
import './App.css';
import { useSelector } from 'react-redux';
import Favorite from './pages/Favorite';

function App() {
  const { pathname } = useLocation();
  const productPageTitle = useSelector(state => state.products.product.title);
  const categoryPageTitle = useSelector(state => state.products.category);
  const queryPageTitle = useSelector(state => state.products.query);
  useEffect(() => {
    const condition = pathname.includes('category');
    pathname === '/' || pathname.includes('search')
      ? document.title = "LucaSTore" 
        : document.title = condition ? categoryPageTitle : productPageTitle;
    if (pathname === '/') {
      document.title = "LucaSTore"
    } else if (pathname.includes('search')) {
      document.title = `Resultados de pesquisa para ${queryPageTitle}`
    } else if (pathname.includes('category')) {
      document.title = categoryPageTitle;
    } else if (pathname.includes('cart')) {
      document.title = 'Carrinho';
    } else {
      document.title = productPageTitle;
    }
  }, [pathname])

  return (
    <div className="app">
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
        <Route
          path="/cart"
          exact
          render={ (props) => <Cart { ...props } />}
        />
        <Route
          path="/favorites"
          exact
          render={ (props) => <Favorite { ...props } />}
        />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
