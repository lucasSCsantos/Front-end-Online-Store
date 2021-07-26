export async function getCategories() {
  const api = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const json = await api.json();
  return json;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const api = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=$${query}`);
  const json = await api.json();
  return json;
}
