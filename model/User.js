const Mongoose = require("mongoose");
const UserSchema = new Mongoose.Schema(
  {
    // no _id designation, mongo will create
    username: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      minlength: 6,
      required: true,
    },
    role: {
      type: String,
      default: "Basic",
      required: true,
    },
    email: {
      type: String,
      default: "-",
      required: true,
    },
  },
  {
    collection: "users",
  }
);

const User = Mongoose.model("users", UserSchema, "users");
module.exports = User;
