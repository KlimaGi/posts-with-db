const express = require('express');
const router = express.Router();

const { postInfo, filterPosts, deletePost } = require('../controllers/mainController');

router.post("/addPost", postInfo);
router.post("/filter", filterPosts);
router.get("/delete/:id", deletePost);

module.exports = router; 