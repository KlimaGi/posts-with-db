const express = require('express');
const router = express.Router();

const { postInfo, filterPosts } = require('../controllers/mainController');

router.post("/addPost", postInfo);

router.post("/filter", filterPosts);

module.exports = router; 