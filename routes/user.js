const express = require("express");
const { userRegiter, userLogin } = require("../controllers/user.controller");
const isAuth = require("../middlewares/passport-setup");

const Router = express.Router();

Router.post("/register-user", userRegiter);
Router.post("/login-user", userLogin);
Router.get("/current-user", isAuth(), (req, res) => {
  res.json(req.user);
});

module.exports = Router;
