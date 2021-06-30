const asyncHandler = require("express-async-handler")
const Brand = require("../models/brandModel.js")

//@desc get all brands 
//@route GET /brands
//@access public
 const getBrands = asyncHandler(async (req, res)=>{
     const brands = await Brand.find({})
     if (brands){
         res.json(brands)
     }else{
         res.status(404)
         throw new Error('Brands not retrieved');
     }

 })

 //@desc add brand
//@route POST /brands
//@access private
const addBrand = asyncHandler(async (req, res)=>{
    const {name, image} = req.body 
    console.log(name,image)
    const brandExist = await Brand.findOne({name})
    if (brandExist){
        res.status(404)
        throw new Error('Brand already exist');
    
    }
    const brand = await Brand.create({name, image})
    res.status(201).json(brand)

})
module.exports = {getBrands, addBrand}