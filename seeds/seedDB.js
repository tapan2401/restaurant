//Execute this for seed database

const mongoose = require("mongoose");
const dbUrl = process.env.DB_URL || "mongodb://localhost:27017/foodFusion";
mongoose.connect(dbUrl, { useNewUrlParser: true });

const Cuisine = require("../models/cuisine");
const cuisines = require("./cuisineDB");

async function seedDB() {
  await Cuisine.deleteMany({});
  for (let el of cuisines) {
    const newCuisine = new Cuisine(el);
    await newCuisine.save();
  }
}

seedDB();
