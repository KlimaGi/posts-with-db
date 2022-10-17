const express = require('express');
const router = express.Router();
const middle = require("../middleware/middle");

const { postInfo, filterPosts, deletePost, updatePost, info } = require('../controllers/mainController');

router.post("/addPost", postInfo);
router.post("/filter", filterPosts);
router.get("/delete/:id", deletePost);
router.post('/update', updatePost);

router.post('/info', middle, info);

module.exports = router; 