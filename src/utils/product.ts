import faker from '@faker-js/faker';
import { ObjectId } from 'bson';
import ProductType from '../types/Product';

type FakeOptions = '' | 'longname';

/**
 * Generates a fake product
 */
function fake(option: FakeOptions = ''): ProductType {
  let productName = faker.commerce.product();
  if (option === 'longname') {
    productName = productName.repeat(10);
  }
  return {
    name: productName,
    _id: new ObjectId(),
    price: parseFloat(faker.commerce.price()),
  };
}

function fakeMany(amount = 2): ProductType[] {
  if (amount > 1) {
    const products = [];
    for (let productsAmount = 0; productsAmount < amount; productsAmount += 1) {
      products.push(fake());
    }

    return products;
  }

  return [];
}

export { fake, fakeMany };
