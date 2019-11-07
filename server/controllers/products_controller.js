//This will be used to perform full crud in the database.
//Make sure to import outside of module.exports, since you want it globally accessible throughout file.
const mongoose = require('mongoose');
const Product = require('../models/product');
module.exports = {
      //Method used to read all the product.
      readAllProducts(req, res) {
            Product.find({}).exec((err, products) => {
                  //consolle.log in case of errors
                  if(err) console.log('Get Product db error', err);
                  //log the data returning
                  console.log('Products--------', products);
                  res.status(200).json(products);
            });
      },



//After the data is received, send status code 200 and send data via JSON method

readProduct(req,res){     
//id from req.params
      const { id } = req.params;

      //retrieve a specific product
      //use findById to get the specific product
      Product.findById(id).exec((err, product) =>{
            if(err) console.log('product error ----- ', product);
            console.log('product-------------', product);
            res.status(200).json({product});
      });
},

createProduct(req, res){
      const { name, description, price, image, rating} = req.body;
      //new product model instance set to a variable
      let newProduct = new Product({
            name,
            description,
            price,
            rating,
            image
      });
      //save model to databse using .save()
      newProduct.save();
      //send products
      res.status(200).json({product: newProduct});
},
updateProduct(req, res){
      const { id } = req.params;
      const {name, description, price, image, rating} = req.body;

      //find the product and update it
      Product.findById(id).exec((err, product) =>{
            if(err) console.log('update product error', err);
            product.name = name;
            product.description = description;
            product.rating = rating;
            product.price=price;
            product.image = image;
            
            product.save();
            res.status(200).json({product});
      });
},
deleteProduct(req, res){
      const { id } = req.params;

      Product.deleteOne({_id: id}).exec((err, product) => {
            if(err) console.log('delete error---------', err);
            res.status(200).json({product});
      });
}
}