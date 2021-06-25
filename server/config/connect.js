const mongoose = require('mongoose') 

const connectDB = async ()=>{
    try{
        const conn = await mongoose.connect(process.env.MONGODB_URI, {
            useUnifiedTopology: true, 
            useNewUrlParser: true,
            useCreateIndex: true
        })
        console.log(`MONGODB connected!:${conn.connection.host}`.cyan.underline)
    }catch(error) {
        console.error(`ERROR:${error.message}`.red.underline.bold)
    }
}
module.exports = connectDB