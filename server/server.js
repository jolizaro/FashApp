const express = require("express");
const colors = require("colors");
const connectDB = require("./config/connect.js")
const dotenv = require("dotenv")
const cors = require('cors');

const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

//confi for the env variable
dotenv.config()
//connecting the db
connectDB()

// Define middleware here
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)


// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
if (process.env.NODE_ENV === "production"){
  app.use(express.static(path.join(__dirname, "/client/build" )))
  app.get("*", (req,res)=> res.sendFile(path.resolve(__dirname, 'client', 'build','index.html')))
}

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`.yellow.bold);
});
