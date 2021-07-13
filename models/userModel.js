const mongoose = require('mongoose')
const reviewSchema = require('./reviewModel.js')
const bcrypt = require('bcrypt')
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
// userSchema.methods.matchPassword= async (enteredPassword)=>{

//     const comparePassword = await bcrypt.compare(enteredPassword, this.password)
// }
// userSchema.pre('save', async (next)=>{
// // if (!this.isModified('password')){
// //     next()
// // }
// const salt = await bcrypt.genSalt(10)
// this.password = await bcrypt.hash(this.password, salt)
// })
const User = mongoose.model('User', userSchema)

module.exports = User