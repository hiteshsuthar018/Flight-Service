const express = require("express");
const CityController = require("../../controllers/city-controller");
const FlightController = require("../../controllers/flight.controller");
const router = express.Router();

//city routes
router.post('/city',CityController.create);
router.post('/cities',CityController.createMulti);
router.delete('/city/:id',CityController.destroy);
router.get('/city/:id',CityController.get);
router.get('/city',CityController.getAll);
router.patch('/city/:id',CityController.update);

//flight routes

router.post('/flights',FlightController.create);



module.exports = router;