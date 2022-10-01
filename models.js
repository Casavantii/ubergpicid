const mongoose = require("mongoose");

const PicInputSchema = new mongoose.Schema({
  picID: {
    type: String,
    required: true,
  },
  picFileName: {
    type: String,
    required: true,
  },
  timeNOW: {
    type: Number,
    required: true,
  }
});

const PicInput = mongoose.model("PicInput", PicInputSchema);

module.exports = { PicInput };