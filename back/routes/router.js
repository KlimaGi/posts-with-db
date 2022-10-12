const express = require('express');
const router = express.Router();

const { carInfo, findCar } = require('../controllers/mainController');

router.post("/addCar", carInfo);

router.get("/find/:value/:category", findCar);

module.exports = router; 