// import models
const Location = require('./location');
const Traveler = require('./traveler');
const Trip = require('./trip');

Trip.belongsTo(Location,{
    foreignKey:`location_id`,
    onDelete: `CASCADE`
});

Trip.belongsTo(Traveler,{
    foreignKey:`traveler_id`,
    onDelete:`CASCADE`
});

Traveler.hasMany(Trip);

Location.hasMany(Trip);

module.exports = {
  Location,
  Traveler,
  Trip
};
