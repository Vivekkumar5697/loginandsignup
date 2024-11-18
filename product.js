const mongoose = require('mongoose')
const product_Schema = new mongoose.Schema({
    username:{type:String},
    password:{type:String}
})

const Products = new mongoose.model('Product',product_Schema)
module.exports = Products;


