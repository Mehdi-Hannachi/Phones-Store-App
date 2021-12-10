require("dotenv").config({ path: "./config/.env" });

const express = require("express");
const connectDB = require("./config/connectDB");
const user = require("./routes/user");

//Initialize express
const app = express();

// Data base connection
connectDB();

app.use(express.json());

app.use("/user", user);

//Create PORT

const PORT = 5000;

//Listen & Run  server
app.listen(PORT, (err) => {
  err
    ? console.log("Server connection failed")
    : console.log(`Server connected successfully on port ${PORT}`);
});
