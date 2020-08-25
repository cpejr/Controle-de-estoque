const FirebaseModel = require('../models/firebase');
const jwt = require("jsonwebtoken");
const User = require('../models/user');

module.exports = {
  async login(request, response) {
    try {
      const { email, password } = request.body;

      let firebaseUser = {}

      try{
        firebaseUser = await FirebaseModel.login(email, password);
      } catch(error){
        console.warn(error)
        return response.status(400).json({ error: error })
      }
      
      const user = await User.getUserByUid(firebaseUser.user.uid);
      
      const acessToken = jwt.sign({user}, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "30d" })

      return response.status(200).json({ acessToken, user });

    } catch (error) {
      console.warn(error)
      return response.status(500).json({ error: error })
    }
  },

  async logout(request, response) {
    try {

      try{
        await FirebaseModel.logout();
      } catch(error){
        return response.status(400).json({ error: error })
      }

      return response.status(200).json({ message: "Loged Out!" });

    } catch (error) {
      return response.status(500).json({ error: error })
    }
  },

}
