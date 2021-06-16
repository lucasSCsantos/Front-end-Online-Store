import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import imageTwo from '../imgs/Carrinho.png';
import ProductSearch from '../components/ProductSearch';
import ProductsList from '../components/ProductsList/ProductsList';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchInput: '',
      selectedCategory: '',
      loading: true,
      categories: [],
      products: [],
    };
    this.renderCategories = this.renderCategories.bind(this);
    this.setLoadState = this.setLoadState.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.getProducts = this.getProducts.bind(this);
  }

  componentDidMount() {
    this.setLoadState();
  }

  handleInputChange({ target }) {
    this.setState({ searchInput: target.value });
  }

  async handleSearch() {
    this.getProducts();
  }

  async getProducts() {
    const { selectedCategory, searchInput } = this.state;
    const data = await getProductsFromCategoryAndQuery(selectedCategory, searchInput);
    this.setState({ products: data.results });
  }

  async setLoadState() {
    const data = [...new Set(await getCategories())];
    this.setState((state) => ({
      loading: false,
      categories: [...state.categories, ...data],
    }));
  }

  renderCategories(data) {
    return (
      <ul>
        {data.map(({ name }, index) => (
          <li
            data-testid="category"
            key={ index }
          >
            { name }
          </li>))}
      </ul>);
  }

  render() {
    const { loading, categories, products, searchInput } = this.state;
    return (
      <>
        <ProductSearch
          handleSubmit={ this.handleSearch }
          onChange={ this.handleInputChange }
          value={ searchInput }
        />
        <Link to="/ShoppingCart">
          <img
            width="30px"
            src={ imageTwo }
            alt="imagem do carrinho"
          />
        </Link>
        <main data-testid="shopping-cart-button" />
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>

        {loading ? 'Loading...' : this.renderCategories(categories)}

        <ProductsList products={ products } />
      </>
    );
  }
}
export default Home;