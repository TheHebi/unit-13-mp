// import important parts of sequelize library
const { Model, DataTypes } = require("sequelize");
// import our database connection from config.js
const sequelize = require("../config/connection");
// Initialize Product model (table) by extending off Sequelize's Model class
class Traveler extends Model {}

// set up fields and rules for Traveler model
Traveler.init(
  {
    // define columns
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      }
    }
  },
  {
    sequelize,
  }
);

module.exports = Traveler;