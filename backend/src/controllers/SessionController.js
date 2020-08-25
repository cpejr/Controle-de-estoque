const FirebaseModel = require('../models/firebase');
const User = require('../models/user');

module.exports = {
  async login(request, response) {
    try {
      const { email, password } = request.body;

      const firebaseUid = await FirebaseModel.login(email, password);

      const user = await User.getUserByUid(firebaseUid);

      return response.status(200).json({ user });

    } catch (error) {
      return response.status(500).json({ error: error })
    }
  },

}
