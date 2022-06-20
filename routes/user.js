const express = require("express");
const router = express.Router();
const passport = require("passport");
const flash = require("connect-flash");
const User = require("../models/user");
const users = require("../controllers/user");
const catchAsync = require("../utils/catchAsync");

router
  .route("/login")
  .get(users.renderLogin)
  .post(
    passport.authenticate("local", {
      failureFlash: true,
      failureRedirect: "/login",
    }),
    users.login
  );

router.route("/signup").get(users.renderSignup).post(catchAsync(users.signup));
router.route("/logout").get(users.logout);

module.exports = router;
