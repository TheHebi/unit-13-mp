// import important parts of sequelize library
const { Model, DataTypes } = require("sequelize");
// import our database connection from config.js
const sequelize = require("../config/connection");
// Initialize Product model (table) by extending off Sequelize's Model class
class Location extends Model {}

// set up fields and rules for Location model
Location.init(
  {
    // define columns
    location_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
  }
);

module.exports = Location;