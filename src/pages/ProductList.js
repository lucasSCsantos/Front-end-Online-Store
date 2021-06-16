import React from 'react';
import PropTypes from 'prop-types';
import { getProductsFromCategoryAndQuery } from '../services/api';
import ProductCard from './ProductCard';
import NotFound from './NotFound';

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    this.fetchProducts();
  }

  async fetchProducts() {
    const { categoryId, query } = this.props;
    const API = await getProductsFromCategoryAndQuery(categoryId, query);
    console.log(API);
    const { results } = API;
    this.setState({
      products: results,
    });
  }

  render() {
    const { products } = this.state;
    return (
      <section>
        {
          products.length === 0 ? <NotFound /> : products
            .map((product) => <ProductCard key={ product.id } product={ product } />)
        }
      </section>
    );
  }
}

export default ProductList;

ProductList.propTypes = ({
  categoryId: PropTypes.string,
  query: PropTypes.string,
}).isRequired;