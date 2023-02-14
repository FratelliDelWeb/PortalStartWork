var mongoose = require("mongoose");

var documentSchema = new mongoose.Schema(
  {
    // no _id designation, mongo will create
    title: {
      type: String,
      required: true,
    },
    desccription: {
      type: String,
      required: true,
    },
    type: {
      data: Buffer,
      contentType: String,
    },
    url: {
      type: String,
      required: true,
    },
  },
  {
    collection: "documents",
  }
);

module.exports = new mongoose.model("documents", documentSchema, "documents");
