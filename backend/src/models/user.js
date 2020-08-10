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
  static getAll() {
    return new Promise((resolve, reject) => {
      Users.find()
        .then((results) => {
          resolve(results);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  static createNew(receivedData) {
    return new Promise((resolve, reject) => {
      const newUser = {
        firebaseId: receivedData.firebaseId,
        userName: receivedData.userName,
        userType: receivedData.userType,
        userCPF: receivedData.userCPF,
        userDate: receivedData.userDate,
      };
      Users.create(newUser)
        .then((result) => {
          resolve(result);
        })
        .catch((error) => {
          console.log(error);
          reject(error);
        });
    });
  }

  static deleteOne(id) {
    return new Promise((resolve, reject) => {
      Users.findByIdAndDelete(id)
        .then((result) => {
          resolve(result);
        })
        .catch((error) => {
          console.log(error);
          reject(error);
        });
    });
  }

  static update(id, newFields) {
    return new Promise((resolve, reject) => {
      Users.findOneAndUpdate({ _id: id }, newFields)
        .then((results) => {
          resolve(results);
        })
        .catch((error) => {
          console.log(error);
          reject(error);
        });
    });
  }
}

module.exports = UsersActions;
