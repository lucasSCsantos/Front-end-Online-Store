import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NewItem extends Component {
  render() {
    const { product,
      // cart,
      handleDelete,
      increaseQuantity,
      decreaseQuantity,
    } = this.props;
    // const quantity = cart.filter((item) => item === product);

    return (
      <div>
        <div key={ product.title }>
          <p data-testid="shopping-cart-product-name">{product.title}</p>
          <button type="button" onClick={ () => handleDelete(product) }>X</button>
          <button
            type="button"
            data-testid="product-increase-quantity"
            onClick={ () => increaseQuantity(product) }
          >
            + MAIS
          </button>
          <button
            type="button"
            data-testid="product-decrease-quantity"
            onClick={ () => decreaseQuantity(product) }
          >
            - MENOS
          </button>
          <img src={ product.thumbnail } alt={ product.title } />
          <p>{product.price}</p>
          <span data-testid="shopping-cart-product-quantity">{product.quantity}</span>
          {/* <span>{product.quantity * product.price}</span> */}
        </div>
      </div>
    );
  }
}

NewItem.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
  // cart: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleDelete: PropTypes.func.isRequired,
  increaseQuantity: PropTypes.func.isRequired,
  decreaseQuantity: PropTypes.func.isRequired,
};
export default NewItem;
