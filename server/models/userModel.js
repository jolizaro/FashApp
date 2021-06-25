const mongoose = require(mongoose)
const reviewSchema = require('./reviewModel.js')
const userSchema = mongoose.Schema({
    email:{
        type: String,
        required: true

    },
    password:{
        type: String, 
        required: true
    },
    name:{
        type: String,
        required: true
    },
    reviews:[reviewSchema]
},{
    timestamps: true
})
const User = mongoose.model('User', userSchema)

module.exports = User