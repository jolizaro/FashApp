const brands = require('./data.js');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Brand = require('./models/brandModel');
const connectDB = require('./config/connect');
const colors = require('colors')

dotenv.config()
connectDB()

const importData = async ()=>{
    try {
        await Brand.deleteMany()
        const createdBrands = await Brand.insertMany(brands)
        console.log('Brands imported'.green.inverse)
        process.exit()

    }catch(error){
      console.error(`${error}`.red.inverse)
      process.exit(1);
    }
}

const destroyData = async () => {
  try {
    await Brand.deleteMany()
  

    console.log('Data destroyed!'.red.inverse)
    process.exit()

  } catch (error) {
    console.error(`${error}`.red.inverse)
    process.exit(1);
  }
}

if (process.argv[2] === '-d') {
  destroyData()
} else {
  importData()
}