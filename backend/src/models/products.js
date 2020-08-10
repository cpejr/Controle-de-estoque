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

    static getAll(){
        return new Promise((resolve, reject) => {
            Products.find().then((results) => {
                resolve(results);
            }).catch((err) => {
                reject(err);
            });
        });
    }

    static createNew(receivedData) {
        return new Promise((resolve, reject) => {
            const product = { 
                name: receivedData.name,
                location: receivedData.location,
                type: receivedData.type,
                lastBuyDate: receivedData.lastBuyDate,
                lastBuyPrice: receivedData.lastBuyPrice,
                amount: receivedData.amount,
                allertAmount: receivedData.allertAmount,
                description: receivedData.description,
            };
            Products.create(product).then((result) => {
                resolve(result);
            }).catch((error) => {
                console.log(error);
                reject(error);
            });
        })
    }

  static deleteOne(id) {
    return new Promise((resolve, reject) => {
      Products.findByIdAndDelete(id).then((result) => {
        resolve(result);
      }).catch((error) => {
        console.log(error);
        reject(error);
      })
    })
  }


  static update(id, newFields) {
    return new Promise((resolve, reject) => {
      Products.findOneAndUpdate({ _id: id }, newFields).then((results) => {
        resolve(results);
      }).catch((error) => {
        console.log(error);
        reject(error);
      });
    });
  }


}

module.exports = ProductsActions