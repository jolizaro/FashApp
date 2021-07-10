const express = require("express")
const router = express.Router()
const {getBrands, addBrand, getBrandDetails, deleteBrand, updateBrand} = require("../controllers/brandController.js")
const {authUser} = require("../middleware/authMiddleware.js")

router.route("/")
    .post(authUser, addBrand)
    .get (getBrands)
router.route("/:id")
    .get(authUser, getBrandDetails)
    .delete(authUser, deleteBrand)
    .put(authUser, updateBrand)

module.exports = router