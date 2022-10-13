const express = require('express');
const router = express.Router();

const { postInfo, findCar } = require('../controllers/mainController');

router.post("/addPost", postInfo);

router.get("/find/:value/:category", findCar);

module.exports = router; 