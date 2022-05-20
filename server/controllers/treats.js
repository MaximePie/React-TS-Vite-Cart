import Product from '../models/Product.js';

async function get(request, response) {
  const pastries = await Product.findTreats();

  // Activer cette ligne pour générer une erreur
  // response.status(500).json(2);
  response.json(pastries);
}

function create(request, response) {
  response.json(null);
}

/**
 * Create a bunch of chocolate products
 * Only use it for dev purpose.
 */
async function mock(request, response) {
  const products = await Product.fake(500, {
    category: 'treats',
  });
  response.json({
    message: 'Created',
    products,
    amount: products?.length,
  });
}

export { get, create, mock };
