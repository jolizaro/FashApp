const express = require("express");
const colors = require("colors");
const connectDB = require("./config/connect.js")
const dotenv = require("dotenv")

const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

//confi for the env variable
dotenv.config()
//connecting the db
connectDB()

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB


// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`.yellow.bold);
});
