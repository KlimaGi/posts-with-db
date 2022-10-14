const postSchema = require('../schemas/postSchema');

module.exports = {
  postInfo: async (req, res) => {
    const newPost = new postSchema(req.body);
    await newPost.save();
    res.send({ post: newPost });
  },
  filterPosts: async (req, res) => {
    const { username } = req.body;

    let posts = [];

    if (username?.length > 0) {
      posts = await postSchema.find({ username });
    } else {
      posts = await postSchema.find();
    }
    console.log('posts', posts);
    res.send({ posts });
  },
  deletePost: async (req, res) => {
    const { id } = req.params;

    await postSchema.findOneAndDelete({ _id: id })

    res.send({ success: true });
  }


}