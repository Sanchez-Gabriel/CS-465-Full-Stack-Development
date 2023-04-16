const express = require('express');
const router = express.Router();
const controller = require('../controllers/trips');
const { expressjwt:jwt}= require('express-jwt');


const auth =jwt ({secret: process.env.JWT_SECRET, algorithms: ['HS512'] });
// Fetch one or all trips
router.get('/:tripCode?', controller.fetchTrips);

// Create a new trip
router.post('/', auth, controller.addTrip);

// Update an existing trip
router.put('/:tripCode',auth, controller.updateTrip);

// Delete a trip
router.delete('/:tripCode', controller.deleteTrip);

module.exports = router;


