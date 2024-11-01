const pool = require("../db");
const UserPreferencesModel = require("./userPreferencesModel");

const UserModel = {
  getAllUsers: async () => {
    const result = await pool.query("SELECT * FROM Users");
    return result.rows;
  },
  createUser: async (name, email) => {
    const result = await pool.query(
      "INSERT INTO users (Name, Email) VALUES ($1, $2)",
      [name, email],
    );
    return result.rows[0];
  },
  getUser: async (userId) => {
    const result = await pool.query("SELECT * FROM Users WHERE id = $1", [userId]);
    return result.rows[0];
  },
  deleteUser: async (userId) => {
    await UserPreferencesModel.deleteUserPreferences(userId);
    await pool.query("DELETE FROM Users WHERE id = $1", [userId]);
    return await UserModel.getAllUsers();
  }
};

module.exports = UserModel;
