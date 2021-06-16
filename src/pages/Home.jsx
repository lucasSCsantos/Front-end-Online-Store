import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as Api from '../services/api';

import ProductList from '../components/ProductList';
import CategoryList from '../components/CategoryList';

import '../styles/Home.css';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      search: '',
      category: '',
    };

    this.HandlerState = this.HandlerState.bind(this);
    this.RequestApi = this.RequestApi.bind(this);
  }

  HandlerState(event) {
    const { target: { name, value } } = event;
    if (name === 'category') {
      this.setState({ [name]: value }, () => this.RequestApi());
    } else {
      this.setState({ [name]: value });
    }
  }

  RequestApi() {
    const { search, category } = this.state;
    this.setState({ data: [] }, () => {
      Api.getProductsFromCategoryAndQuery(category, search)
        .then(({ results }) => {
          this.setState({ data: results });
        });
    });
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        <div className="searchSection">
          <label htmlFor="search">
            <input
              data-testid="query-input"
              type="text"
              name="search"
              onChange={ this.HandlerState }
            />
          </label>
          <button
            className="btn"
            data-testid="query-button"
            type="submit"
            onClick={ this.RequestApi }
          >
            Pesquisar
          </button>
          <Link
            className="btn cart-btn"
            to="/cart"
            data-testid="shopping-cart-button"
          >
            Carrinho
          </Link>
        </div>
        <h2 className="home-message" data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h2>
        <div className="category-products-wrapper">
          <CategoryList
            handleUserInput={ this.HandlerState }
          />
          <ProductList productsList={ data } />
        </div>

      </div>
    );
  }
}

export default Home;
