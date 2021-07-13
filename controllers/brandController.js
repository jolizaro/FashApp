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

 //@desc delete a brand
//@route DELETE /brands/:brandId
//@access private
const deleteBrand = asyncHandler(async (req, res)=>{
    const brand = await Brand.findById(req.params.id)
    if (brand){
        brand.remove()
        res.status(200).send("brand deleted");
    }else{
        res.status(404)
        throw new Error('Brand not found');
    }

})
 //@desc update a brand
//@route PUT /brands/:id
//@access private
const updateBrand = asyncHandler(async (req, res)=>{
     console.log(req.body);
    const brand = await Brand.findById(req.params.id)
    if (brand){
        brand.name = req.body.name ? req.body.name : brand.name
        brand.description = req.body.description ? req.body.description : brand.description;
        brand.image = req.body.image ? req.body.image : brand.image;
        const updatedBrand = await brand.save();
        res.status(200).json(updatedBrand);
    }else{
        res.status(404)
        throw new Error('Brand not found');
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
    const {name, image, description, userId} = req.body 
    
    const brandExist = await Brand.findOne({name})
    if (brandExist){
        res.status(404)
        throw new Error('Brand already exist');
    
    }
    const brand = await Brand.create({name, image, description, userId})
    res.status(201).json(brand)

})
module.exports = {getBrands, addBrand, getBrandDetails, deleteBrand, updateBrand}