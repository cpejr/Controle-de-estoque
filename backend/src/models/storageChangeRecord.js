const mongoose = require("mongoose");

const storageChangeRecordSchema = new mongoose.Schema(
  {
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Products',
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
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    isCancelled: {
      type: Boolean,
    },
  },
  { timestamps: true }
);

const StorageChangeRecord = mongoose.model("StorageChangeRecord",storageChangeRecordSchema);

class StorageChangeRecordActions {
  static async getAll() {
    const results = await StorageChangeRecord.find({ isCancelled: null });
    return results;
  }

  static async allCancelled() {
    const results = await StorageChangeRecord.find({ isCancelled: true });
    return results;
  }

  static async createNew(changedProduct) {
    const result = await StorageChangeRecord.create(changedProduct);
    return result;
  }

  static async cancel(id) {
    const result = await StorageChangeRecord.findOneAndUpdate({ _id: id }, { isCancelled: true })
    return result;
  }
}

module.exports = StorageChangeRecordActions;