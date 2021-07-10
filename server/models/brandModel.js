const mongoose = require('mongoose')
const reviewSchema = require("./reviewModel.js")
const brandSchema = mongoose.Schema({
    name:{
        type: String,
        required: true

    },
    image:{
        type: String, 
        required: true
    },
    description: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: false
    },
    
    reviews:[reviewSchema]
},{
    timestamps: true
})
const Brand = mongoose.model('Brand', brandSchema)

module.exports = Brand