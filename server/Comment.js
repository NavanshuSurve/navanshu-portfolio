const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const CommentSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      maxlength: 50,
      trim: true,
    },
    comment: {
      type: String,
      required: true,
      maxlength: 100,
      trim: true,
    },
  },
  {
    timestamps: true, // automatically adds createdAt & updatedAt
  },
);

module.exports = mongoose.model("Comment", CommentSchema);
