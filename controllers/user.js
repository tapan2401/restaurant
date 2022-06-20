const User = require("../models/user");

module.exports.renderLogin = (req, res) => {
  if (req.user) return res.redirect("/");
  res.render("login");
};

module.exports.login = (req, res) => {
  if (req.user) return res.redirect("/");
  req.flash("success", "Welcome");
  res.redirect("/");
};

module.exports.renderSignup = (req, res) => {
  if (req.user) return res.redirect("/");
  res.render("signup");
};

module.exports.signup = async (req, res, next) => {
  if (req.user) return res.redirect("/");
  try {
    const { fname, email, username, phone, password, password2 } = req.body;

    if (await User.findOne({ email })) {
      req.flash("error", "Email already exists");
      return res.redirect("/signup");
    }
    if (await User.findOne({ username })) {
      req.flash("error", "Username already exists");
      return res.redirect("/signup");
    }
    if (isNaN(phone)) {
      req.flash("error", "Enter correct Phone number");
      return res.redirect("/signup");
    }
    if (password !== password2) {
      req.flash("error", "Password does not match");
      return res.redirect("/signup");
    }
    const user = new User({
      email: email,
      name: fname,
      phone: phone,
      username: username,
    });
    const newUser = await User.register(user, password);
    await req.login(newUser, (err) => {
      if (err) return next(err);
      req.flash("success", "Sign Up Successful");
      return res.redirect("/");
    });
  } catch (e) {
    req.flash("error", e.message);
    res.redirect("/signup");
  }
};

module.exports.logout = (req, res) => {
  req.logout((err) => {
    if (err) return next(req, res, err);
  });
  req.flash("success", "Goodbye");
  res.redirect("/");
};
