const express = require("express");
const { userRegiter } = require("../controllers/user.controller");

const Router = express.Router();

Router.post("/registerUser", userRegiter);

module.exports = Router;
