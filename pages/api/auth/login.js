const User = require("../../../model/User");
const bcrypt = require("bcryptjs");
import dbConnect from "../../../lib/dbConnect";
const jwtSecret = process.env.JWT_KEY || process.env.JWT_KEY;
import { setCookie } from "../../../utils/cookie";
import { sign } from "../../../lib/jwt";

export default async function handler(req, res, next) {
  //DB Connection
  let { db } = await dbConnect();
  console.log("**LOG** Users - Login - Init");

  const { username, password } = req.body;
  // Check if username and password is provided
  if (!username || !password) {
    return res.status(400).json({
      message: "Username or Password not present",
    });
  }
  try {
    const user = await User.findOne({ username });
    if (!user) {
      res.status(400).json({
        message: "Login not successful",
        error: "User not found",
      });
    } else {
      // comparing given password with hashed password
      bcrypt.compare(password, user.password).then(async function (result) {
        console.log(password);
        console.log(user.password);
        console.log(result);
        if (result) {
          const token = await sign(
            { id: user._id, username, role: user.role },
            jwtSecret
          );
          setCookie(res, "jwt", token, {
            path: "/",
            maxAge: 2592000,
            httpOnly: true,
          });
          res.status(201).json({
            message: "User successfully Logged in",
            user: user._id,
            role: user.role,
          });
        } else {
          res.status(400).json({ message: "Login not successful" });
        }
      });
    }
  } catch (error) {
    res.status(400).json({
      message: "An error occurred",

      error: error.message,
    });
  }
}
