/* eslint-disable no-use-before-define */
import mongoose from 'mongoose';
import { faker } from '@faker-js/faker';

const { Schema, model } = mongoose;

const ProductSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: { type: Number, default: 0 },
  category: {
    type: String,
  },
});

ProductSchema.methods = {

};

ProductSchema.statics = {
  async findChocolates() {
    return Product.find({
      category: 'chocolate',
    });
  },

  async findPastries() {
    return Product.find({
      category: 'pastries',
    });
  },

  async findTreats(limit = 1000) {
    return Product.find({
      category: 'treats',
    }).limit(limit);
  },

  /**
   * Create Amount number of products with the provided values parameters
   * Using Faker
   * @param amount {number} The amount of desired products
   * @param values {object} The field values to be specified on the new objects.
   * @return {array}
   */
  async fake(amount = 5, values = {}) {
    const { category } = values;
    if (amount > 0) {
      const categories = ['chocolate', 'pastries', 'treats'];
      const products = [];

      for (let currentProductIndex = 0; currentProductIndex < amount; currentProductIndex += 1) {
        const newProduct = {
          name: faker.commerce.product(),
          category: category || faker.helpers.arrayElement(categories),
          price: faker.commerce.price(),
        };
        products.push(newProduct);
      }

      await Product.insertMany(products);
      return products;
    }
    return [];
  },
};

const Product = model('product', ProductSchema);

export default Product;
