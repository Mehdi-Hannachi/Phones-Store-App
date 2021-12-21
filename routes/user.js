const express = require("express");
const { userRegiter, userLogin } = require("../controllers/user.controller");

const Router = express.Router();

Router.post("/register-user", userRegiter);
Router.post("/login-user", userLogin);

module.exports = Router;
