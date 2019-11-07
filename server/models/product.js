const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Need an id(default in mongodb), productName, description,rating,price, image
const product = new Schema({
      name: String,
      description: String,
      rating: Number,
      price: Number,
      image: String
});
//To create a model, use the name of the model, and the schema with the properties of the model
// that  wil be inserted to the  database.
module.exports = mongoose.model('Product', product);