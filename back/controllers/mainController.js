const postSchema = require('../schemas/postSchema');

module.exports = {
  postInfo: async (req, res) => {
    const newPost = new postSchema(req.body);
    console.log('newPost', newPost);
    await newPost.save();
    res.send({ post: newPost });
  },
  findCar: async (req, res) => {
    const { value, category } = req.params;

    let obj = {};
    obj[category] = value;

    const cars = await carSchema.find(obj);
    console.log('value, category', value, category);

    res.send({ cars });
  }


}