const mongoose = require("mongoose");

const cuisineSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  item: {
    type: [
      {
        name: String,
        url: String,
      },
    ],
    required: true,
  },
});

module.exports = mongoose.model("Cuisine", cuisineSchema);
