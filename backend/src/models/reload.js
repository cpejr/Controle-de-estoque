const mongoose = require('mongoose');

const reloadSchema = new mongoose.Schema({
    products: [{
        product: mongoose.Schema.Types.ObjectId,
        amount: Number,
    }],
}, {timestamps: true});

const Reloads = mongoose.model('Reloads', reloadSchema);

class ReloadsActions {

    static async getAll(){
        const results = await Reloads.find();
        return results;
    }

    static async createNew(receivedData) {
        const reload = {products: receivedData}
        const result = await Reloads.create(reload);
        return result;
    }


}

module.exports = ReloadsActions