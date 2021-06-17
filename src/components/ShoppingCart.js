import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ShoppingCart extends Component {
  render() {
    const storage = Object.keys(localStorage);
    const cartItems = storage.map((key) => {
      const item = JSON.parse(localStorage[key]);
      return item;
    });
    console.log(cartItems);
    return (
      <div>
        {
          (cartItems.length === 0)
            ? <h2 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h2>
            : cartItems.map((product, index) => (
              <div key={ index }>
                <p data-testid="shopping-cart-product-name">{ product.title }</p>
                <p data-testid="shopping-cart-product-quantity">{product.counter}</p>
              </div>
            ))
        }
        <Link to="/">Voltar</Link>
      </div>
    );
  }
}