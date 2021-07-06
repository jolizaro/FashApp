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
//@desc get brand by id
//@route GET /brands/:id
//@access private
 const getBrandDetails = asyncHandler(async (req, res)=>{
     const brand = await Brand.findById(req.params.id)
     if (brand){
         res.json(brand)
     }else{
         res.status(404)
         throw new Error('Brand does not exist');
     }

 })

 //@desc add brand
//@route POST /brands
//@access private
const addBrand = asyncHandler(async (req, res)=>{
    const {name, image, description} = req.body 
    
    const brandExist = await Brand.findOne({name})
    if (brandExist){
        res.status(404)
        throw new Error('Brand already exist');
    
    }
    const brand = await Brand.create({name, image, description})
    res.status(201).json(brand)

})
module.exports = {getBrands, addBrand, getBrandDetails}