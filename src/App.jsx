import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home, Cart, Product, Checkout } from './pages';
import * as api from './services/api';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.updateSearchResults = this.updateSearchResults.bind(this);
    this.addItemToCart = this.addItemToCart.bind(this);
    this.getTotalPrice = this.getTotalPrice.bind(this);
    this.removeItemFromCart = this.removeItemFromCart.bind(this);
    this.updateQuantity = this.updateQuantity.bind(this);

    this.state = {
      searchResults: { results: [] },
      categories: [],
      shoppingCart: {
        totalItemCount: 0,
        itemList: [],
      },
    };

    try {
      const storedState = this.getStorage();
      this.state = storedState;
    } catch (err) {
      console.log(`Could not fetch stored state: ${err}`);
    }
  }

  componentDidMount() {
    const { categories } = this.state;
    if (!categories.length) {
      this.defineStateCategories();
    }
  }

  componentDidUpdate() {
    this.saveStorage();
  }

  getStorage() {
    if (!Storage || !localStorage) return;

    const retrievedState = localStorage.getItem('frontend-store');

    if (!retrievedState) throw new Error('Sem nada');

    try {
      const parsedState = JSON.parse(retrievedState);
      return parsedState;
    } catch (err) {
      throw new Error(err);
    }
  }

  getTotalPrice() {
    const { shoppingCart } = this.state;
    const { itemList } = shoppingCart;
    if (itemList.length) {
      return itemList.reduce((acc, current) => {
        acc += (current.price * current.quantity);
        return acc;
      }, 0).toFixed(2);
    }
    return 0;
  }

  saveStorage() {
    if (!Storage || !localStorage) return;

    const jsonState = JSON.stringify(this.state);

    localStorage.setItem('frontend-store', jsonState);
  }

  addItemToCart(product) {
    this.setState(({ shoppingCart: { totalItemCount, itemList } }) => {
      const newShoppingCart = {
        totalItemCount: totalItemCount + 1,
        itemList: JSON.parse(JSON.stringify(itemList)),
      };

      let hasUpdatedItemQuantity = false;

      newShoppingCart.itemList.forEach((item) => {
        if (item.id === product.id) {
          item.quantity += 1;
          hasUpdatedItemQuantity = true;
        }
      });

      if (!hasUpdatedItemQuantity) {
        product.quantity = 1;
        newShoppingCart.itemList.push(product);
      }

      return { shoppingCart: newShoppingCart };
    });
  }

  updateQuantity(product, delta) {
    this.setState(({ shoppingCart: { totalItemCount, itemList } }) => {
      const newShoppingCart = { totalItemCount };

      newShoppingCart.itemList = itemList.map((item) => {
        const newItem = { ...item };
        if (newItem.id === product.id) {
          const min = 1;
          const max = newItem.available_quantity;
          const previousQuantity = newItem.quantity;
          const newQuantity = newItem.quantity + delta;
          newItem.quantity = Math.max(Math.min(newQuantity, max), min);

          const totalDelta = newItem.quantity - previousQuantity;
          newShoppingCart.totalItemCount += totalDelta;
          return newItem;
        }

        return newItem;
      });

      return {
        shoppingCart: newShoppingCart,
      };
    });
  }

  removeItemFromCart(id) {
    this.setState(({ shoppingCart: { totalItemCount, itemList } }) => {
      const newShoppingCart = { totalItemCount };

      newShoppingCart.itemList = itemList.filter((item) => {
        if (item.id === id) {
          newShoppingCart.totalItemCount -= item.quantity;
          return false;
        }
        return true;
      });

      return { shoppingCart: newShoppingCart };
    });
  }

  async defineStateCategories() {
    try {
      const categories = await api.getCategories();
      this.setState({ categories });
    } catch (err) {
      console.error(err);
    }
  }

  updateSearchResults(searchResults) {
    this.setState({ searchResults });
  }

  render() {
    const { categories, searchResults, shoppingCart } = this.state;
    const { totalItemCount } = shoppingCart;

    return (
      <>
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path="/"
              render={ () => (<Home
                searchResults={ searchResults }
                updateSearchResults={ this.updateSearchResults }
                categories={ categories }
                addItemToCart={ this.addItemToCart }
                totalItemCount={ totalItemCount }
              />) }
            />

            <Route
              path="/cart"
              render={ () => (<Cart
                updateQuantity={ this.updateQuantity }
                removeItemFromCart={ this.removeItemFromCart }
                shoppingCart={ shoppingCart }
                getTotalPrice={ this.getTotalPrice }
              />) }
            />

            <Route
              path="/product/:id"
              render={ (props) => (<Product
                addItemToCart={ this.addItemToCart }
                totalItemCount={ totalItemCount }
                { ...props }
              />) }
            />
            <Route
              path="/checkout"
              render={ () => (<Checkout
                getTotalPrice={ this.getTotalPrice }
                shoppingCart={ shoppingCart }
              />) }
            />
          </Switch>
        </BrowserRouter>
        <footer>
          <p>Feito pelo Grupo 14, o grupo brabo</p>
          <p>
            Ícones por&nbsp;
            <a href="https://freeicons.io/profile/730">anumithun</a>
            &nbsp;do&nbsp;
            <a href="https://freeicons.io">freeicons.io</a>
          </p>
        </footer>
      </>
    );
  }
}

export default App;