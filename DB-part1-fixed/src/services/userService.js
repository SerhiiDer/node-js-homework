const UserModel = require('../models/userModel');
const UserPreferencesModel = require('../models/userPreferencesModel');

const UserService = {
  getUsers: async () => {
    return await UserModel.getAllUsers();
  },
  createUser: async (name, email) => {
    return await UserModel.createUser(name, email);
  },
  getUserPreferences: async (userId) => {
    return await UserPreferencesModel.getUserPreferences(userId);
  },
  createUserPreference: async (userId, languageCode, preferredCommunication) => {
    return await UserPreferencesModel.createUserPreference(userId, languageCode, preferredCommunication);
  },
  deleteUser: async (userId) => {
    return await UserModel.deleteUser(userId);
  },
  getUser: async (userId) => {
    return await UserModel.getUser(userId);
  }
};

module.exports = UserService;
