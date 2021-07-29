const router = require('express').Router();
const locationRoutes = require('./location-routes');
const travelerRoutes = require('./traveler-routes');
const tripRoutes = require('./trip-routes');

router.use('/locations', locationRoutes);
router.use('/travelers', travelerRoutes);
router.use('/trips', tripRoutes);

module.exports = router;