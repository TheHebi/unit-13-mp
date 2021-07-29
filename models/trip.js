// import important parts of sequelize library
const { Model, DataTypes } = require("sequelize");
// import our database connection from config.js
const sequelize = require("../config/connection");
const Traveler = require("./Traveler");
const  Location  = require("./Location");
// Initialize Product model (table) by extending off Sequelize's Model class
class Trip extends Model {}

// set up fields and rules for Trip model
Trip.init(
  {
    // define columns
    trip_budget: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        isDecimal: true,
      },
    },
    traveler_amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isNumeric: true,
      },
    },
    traveler_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Traveler,
        key: `id`,
      },
    },
    location_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Location,
        key: `id`,
      },
    },
  },
  {
    sequelize,
  }
);

module.exports = Trip;
