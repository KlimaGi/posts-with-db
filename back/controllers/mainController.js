const postSchema = require('../schemas/postSchema');

module.exports = {
  postInfo: async (req, res) => {
    const newPost = new postSchema(req.body);
    console.log('newPost', newPost);
    await newPost.save();
    res.send({ post: newPost });
  },
  filterPosts: async (req, res) => {
    const { username } = req.body;

    let posts = [];

    if (username.length > 0) {
      posts = await postSchema.find({ username });
    } else {
      posts = await postSchema.find();
    }

    console.log('result-username', username);

    res.send({ posts });
  }


}