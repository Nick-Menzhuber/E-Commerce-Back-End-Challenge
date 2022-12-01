const { Product } = require('../models');

const productData = [
  {
    product_name: 'Star Wars T-Shirt',
    price: 14.99,
    stock: 14,
    category_id: 1,
  },
  {
    product_name: 'Nike Cortez Sneakers',
    price: 90.0,
    stock: 25,
    category_id: 5,
  },
  {
    product_name: 'Minnesota Twins Hat',
    price: 22.99,
    stock: 12,
    category_id: 4,
  },
  {
    product_name: 'Sgt Pepper\'s Lonely Hearts Club Band',
    price: 19.67,
    stock: 50,
    category_id: 3,
  },
  {
    product_name: 'Dad Cargo Shorts',
    price: 29.99,
    stock: 22,
    category_id: 2,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
