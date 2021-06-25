const mongoose = require(mongoose)
const reviewSchema = mongoose.Schema({
    title:{
        type: String,
        required: true

    },
    description:{
        type: String, 
        required: true
    },
    rating:{
        type: Number,
        required: true
    },
    image:{
        type: String,
        required: false
    }
},{
    timestamps: true
})


module.exports = reviewSchema