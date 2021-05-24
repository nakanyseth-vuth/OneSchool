const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  post_text: {
    type: String,
    require: true,
  },
  post_image: {
    type: String,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Post", PostSchema);