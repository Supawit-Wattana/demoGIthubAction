const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Product = new Schema({
    name:String,
    price:String,
},{
    validateBeforeSave:true
})

module.exports = mongoose.model("Product",Product);