import Product from '../models/Product.js';

async function get(request, response) {
  const chocolates = await Product.findChocolates({});
  response.json(chocolates);
}

function create(request, response) {
  response.json(null);
}

/**
 * Create a bunch of chocolate products
 * Only use it for dev purpose.
 */
async function mock(request, response) {
  const products = await Product.fake(2, {
    category: 'chocolate',
  });
  response.json({
    message: 'Created',
    products,
    amount: products?.length,
  });
}

export {
  get, create, mock,
};
