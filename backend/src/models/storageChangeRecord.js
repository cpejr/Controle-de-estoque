const Products = require("./products")
const mongoose = require("mongoose");

const storageChangeRecordSchema = new mongoose.Schema({
    productId: {
        type: String,
        required: true,
    },
    productName: {
        type: String,
        required: true,
    },
    amountChanged: {
        type: Number,
        required: true,
    },
    newAmount: {
        type: Number,
        required: true,
    },
    userName: {
        type: String,
        required: true,
    },
    updatedAt: {
        type: Date,
        required: true,
    },
    isCancelled: {
        type: Boolean,
    },
});

const StorageChangeRecord = mongoose.model("StorageChangeRecord", storageChangeRecordSchema);

class StorageChangeRecordActions {

    static getAll() {
        return new Promise((resolve, reject) => {
            StorageChangeRecord.find().then((results) => {
                resolve(results);
            }).catch((err) => {
                reject(err);
            });
        });
    }

    static createNew(productId, amountChanged, userName) {
        return new Promise((resolve, reject) => {
            Products.findProduct(productId).then(product => {
                const changedProduct = {
                    productId: req.body.productId,
                    productName: req.body.productName,
                    amountChanged: req.body.amountChanged,
                    newAmount: req.body.newAmount,
                    userName: req.body.userName,
                    updatedAt: req.body.updatedAt,
                };
                StorageChangeRecord.create(changedProduct).then((result) => {
                    resolve(result);
                }).catch((error) => {
                    console.log(error);
                    reject(error);
                });
            })
        })
    }


    static cancel(id) {
        return new Promise((resolve, reject) => {
            StorageChangeRecord.findOneAndUpdate({ _id: id }, { isCancelled: true }).then((results) => {
                resolve(results);
            }).catch((error) => {
                console.log(error);
                reject(error);
            });
        });
    }


}

module.exports = StorageChangeRecordActions;
