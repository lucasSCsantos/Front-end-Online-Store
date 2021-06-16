import React from 'react';
import { Link } from 'react-router-dom';

import FiltersBar from '../components/filtersbar/FiltersBar';
import * as api from '../services/api';

class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    this.FetchAPI();
  }

  async FetchAPI() {
    const getCategories = await api.getCategories();
    this.setState({
      categories: getCategories,
    });
  }

  render() {
    const { categories } = this.state;
    return (
      <div>
        <FiltersBar categories={ categories } />
        <label htmlFor="search-input">
          <input type="text" name="search" id="search-input" />
          <h1 data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </h1>
          <Link data-testid="shopping-cart-button" to="/shopping-cart">Procurar</Link>
        </label>
      </div>
    );
  }
}

export default Home;
