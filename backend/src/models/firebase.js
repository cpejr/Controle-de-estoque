const firebase = require("firebase/app");

var admin = require('firebase-admin');

require("firebase/auth");

const serviceAccount = require("../../serviceAccountKey.json");

var firebaseConfig = {
  apiKey: process.env.FIREBASE_APIKEY,
  authDomain: process.env.FIREBASE_AUTHDOMAIN,
  databaseURL: process.env.FIREBASE_DATABASEURL,
  projectId: process.env.FIREBASE_PROJECTID,
  storageBucket: process.env.FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGINGSENDE,
  appID: process.env.FIREBASE_APPID,
};

firebase.initializeApp(firebaseConfig);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://controle-de-estoque-d06a3a.firebaseio.com'
})

module.exports = {

  async createNewUser(email, password) {
    const result = firebase.auth().createUserWithEmailAndPassword(email, password);
    return result;
  },

  async deleteUser(uid) {
    const result = admin.auth().deleteUser(uid);
    return result;
  },

  async changeUserPassword(uid, newPassword) {
    const result = firebase.auth().updateUser(uid, {password: newPassword})
    return result
  },

  async login (email, password) {
    const result = firebase.auth().signInWithEmailAndPassword(email, password);
    return result;
  },

};