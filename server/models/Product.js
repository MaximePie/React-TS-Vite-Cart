/* eslint-disable no-use-before-define */
import mongoose from 'mongoose';

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

ProductSchema.statics = {
  async findChocolates() {
    return Product.find({
      category: 'chocolate',
    });
  },
};

const Product = model('Product', ProductSchema);

export default Product;
