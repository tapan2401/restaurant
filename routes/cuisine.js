const express = require("express");
const router = express.Router();
const cuisine = require("../models/cuisine");
const catchAsync = require("../utils/catchAsync");

router.get(
  "/:cuis",
  catchAsync(async (req, res) => {
    let { cuis } = req.params;
    cuis = cuis[0].toUpperCase() + cuis.substring(1);
    const cuisineFound = await cuisine.findOne({ name: cuis });
    res.render("cuisine", { cuisineFound });
  })
);

module.exports = router;
