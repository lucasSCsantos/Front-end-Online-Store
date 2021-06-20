/* eslint-disable max-len */
/* eslint-disable camelcase */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './ProductCard.css';
import Ship from '../../imgs/frete.jpg';

export default class ProductCard extends Component {
  render() {
    const {
      title,
      price,
      thumbnail,
      id,
      shipping,
      handleAddToShopCart,
      availableQuantity,
    } = this.props;
    return (
      <div className="product-card" data-testid="product">
        <Link
          data-testid="product-detail-link"
          to={ {
            pathname: `/details/${id}`,
            state: {
              title,
              price,
              thumbnail,
              id,
              availableQuantity,
              shipping,
            },
          } }
        >
          {title}
        </Link>
        <img src={ thumbnail } alt={ title } />
        {price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
        <p>
          { shipping ? <img
            data-testid="free-shipping"
            className="free-shipping"
            src={ Ship }
            alt="Frete Grátis!!!"
          /> : '' }
        </p>
        { price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }
        <button
          type="button"
          id={ title }
          className={ thumbnail }
          name={ price }
          onClick={ () => handleAddToShopCart(this.props) }
          data-testid="product-add-to-cart"
        >
          Comprar
        </button>
      </div>
    );
  }
}

ProductCard.propTypes = {
  handleAddToShopCart: PropTypes.func,
  title: PropTypes.string,
  thumbnail: PropTypes.string,
  price: PropTypes.number,
  id: PropTypes.string,
}.isRequired;