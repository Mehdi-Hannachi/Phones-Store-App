require("dotenv").config({ path: "./config/.env" });

const express = require("express");
const connectDB = require("./config/connectDB");
const user = require("./routes/user");
const phone = require("./routes/phone");
const admin = require("./routes/admin");

//Initialize express
const app = express();

// Data base connection
connectDB();

app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}

app.use("/user", user);
app.use("/phone", phone);
app.use("/", admin);

//Create PORT

const port = process.env.PORT || process.env.port;

//Listen & Run  server
app.listen(port, (err) => {
  err
    ? console.log("Server connection failed")
    : console.log(`Server connected successfully on port 6000 `);
});
