const mongoose = require("mongoose");

const FileSchema = new mongoose.Schema({
  name: String,
  mimetype: String,
  size: Number,
  path: String,
});

const File = mongoose.model("File", FileSchema);

module.exports = File;
