const carSchema = require('../schemas/carSchema');

module.exports = {
  carInfo: async (req, res) => {
    const newCar = new carSchema(req.body)
    await newCar.save();
    res.send({ car: newCar });
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