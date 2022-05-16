import Product from '../models/Product.js';

async function get(request, response) {
  const chocolates = await Product.findChocolates({});
  response.json(chocolates);
}

function create(request, response) {
  response.json(null);
}

export { get, create };
