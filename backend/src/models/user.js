const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firebaseId: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  userType: {
    type: String,
    required: true,
  },
  userCPF: {
    type: String,
    required: true,
  },
  userDate: {
    type: Date,
    required: true,
  },
});

const Users = mongoose.model("Users", userSchema);

class UsersActions {

  static async getAll() {
    const results = await Users.find();
    return results;
  }

  static async createNew(user) {
    const result = await Users.create(user);
    return result;
  }

  static async deleteOne(id) {
    const result = await Users.findByIdAndDelete(id);
    return result;
  }

  static async update(id, newFields) {
    const result = await Users.findOneAndUpdate({ _id: id }, newFields);
    return result;
  }

  static async findUser(id) {
    const result = await Users.findById(id);
    return result;

  }

  static async getUserByUid(firebaseId) {
    const result = await Users.findOne({firebaseId: firebaseId});
    return result;
  }

}

module.exports = UsersActions;
