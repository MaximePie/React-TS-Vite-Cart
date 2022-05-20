import Product from '../models/Product.js';

async function get(request, response) {
  const pastries = await Product.findPastries();
  response.json(pastries);
}

async function create(request, response) {
  const pastry = await Product.create(request.fields.pastry);
  response.json(pastry);
}

/**
 * Create a bunch of chocolate products
 * Only use it for dev purpose.
 */
async function mock(request, response) {
  const products = await Product.fake(50, {
    category: 'pastries',
  });
  response.json({
    message: 'Created',
    products,
    amount: products?.length,
  });
}

export { get, create, mock };
