const express = require("express")
const router = express.Router()
const {getBrands, addBrand} = require("../controllers/brandController.js")
const {authUser} = require("../middleware/authMiddleware.js")

router.route("/")
    .post(authUser, addBrand)
    .get (getBrands)
 

    module.exports = router