import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';

import '../styles/ProductList.css';

class ProductList extends Component {
  render() {
    const { productsList } = this.props;
    return (
      <ul className="productList">
        {productsList.map(({ title, thumbnail, price, id }) => (
          <ProductCard
            key={ title }
            title={ title }
            thumbnail={ thumbnail }
            price={ price }
            id={ id }
          />
        ))}
      </ul>
    );
  }
}

ProductList.propTypes = {
  productsList: PropTypes.arrayOf(PropTypes.object),
}.isRequired;

export default ProductList;
