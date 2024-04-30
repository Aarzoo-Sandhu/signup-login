const User = require('../model/user-model');

// Function to create a new user
async function createUser(params) {
   try {
       const newUser = await User.create(params);
       return newUser;
   } catch (error) {
       throw new Error(error.message);
   }
}

// Function to find a user by username
async function findUserByUsername(username) {
   try {
       const user = await User.findOne({ username });
       return user;
   } catch (error) {
       throw new Error(error.message);
   }
}

module.exports = { createUser, findUserByUsername };
