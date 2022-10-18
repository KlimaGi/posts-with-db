const express = require('express');
const router = express.Router();
const middle = require("../middleware/middle");
const middlePost = require("../middleware/middlePost");

const { postInfo, filterPosts, deletePost, updatePost, validate, validatePost } = require('../controllers/mainController');

router.post("/addPost", postInfo);
router.post("/filter", filterPosts);
router.get("/delete/:id", deletePost);
router.post("/update", updatePost);
router.post("/createPost", middlePost, validatePost)

router.post('/validate', middle, validate);

module.exports = router; 