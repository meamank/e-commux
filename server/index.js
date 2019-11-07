require('dotenv').config();

const bodyParser = require("body-parser");
const session = require('express-session');
const cors = require('cors');
const productsController = require('./controllers/products_controller');
//Import mongoose module to connect to mongodb database instance using it's connection string.
const mongoose = require('mongoose');
//Import express server
const express = require('express');

const app = express();
//Define the Port your will be running your server on.
//NOTE: Make sure the Port is the same as the proxy.
const PORT = 3000;

 //Allow cross origin requests.
 app.use(cors());
//For initializing the req.body. If the middleware is not used, the req.body is undefined.
app.use(bodyParser.json());



//Connect the mongoose to the database using it's connect method.

mongoose.connect('mongodb+srv://username:password@cluster0-9joci.mongodb.net/test?retryWrites=true', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB databse connection established Succesfully");
})


setTimeout(() => {
      //All our endpoints.
      }, 200)

//Products Endpoints
//Getting all the products
app.get('/api/products', productsController.readAllProducts);
//Getting a specified product
//Use a request parameter, since retrieving a specified product..
app.get('/api/products/:id', productsController.readProduct);

//When a  product is created. No need for request parameter in this case. Since we are inserting data to database.
app.post('/api/products', productsController.createProduct);
//When a  product is updated. Need request parameter since updating a specific product based on  the id.
app.put('/api/products/:id', productsController.updateProduct);
//When a admin deletes a product, need an id to specify a product to delete.
app.delete('/api/products/:id', productsController.deleteProduct);

/// listen on the port.
app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});