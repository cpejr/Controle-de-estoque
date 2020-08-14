const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    lastBuyDate: {
        type: Date,
        required: true
    },
    lastBuyPrice: {
        type: Number,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    allertAmount: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
});

const Products = mongoose.model('Products', productSchema);

class ProductsActions {

  static async getAll(){
    const results = await Products.find();
    return results;
  }

  static async createNew(product) {
    const result = await Products.create(product);
    return result;
  }

  static async deleteOne(id) {
    const result = await Products.findByIdAndDelete(id);
    return result;
  }


  static async update(id, newFields) {
    const result = await Products.findOneAndUpdate({ _id: id }, newFields);
    return result;
  }

  
  static async findProduct(id) {
    const result = await Products.findById( id );
    return result;
  }

}

module.exports = ProductsActions