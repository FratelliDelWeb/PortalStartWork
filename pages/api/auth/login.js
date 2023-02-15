const User = require("../../../model/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
import dbConnect from "../../../lib/dbConnect";
const jwtSecret = process.env.JWT_KEY || env.local.JWT_KEY;
import { setCookie } from "../../../utils/cookie";

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
      bcrypt.compare(password, user.password).then(function (result) {
        console.log(password);
        console.log(user.password);
        console.log(result);
        if (result) {
          const maxAge = 3 * 60 * 60;
          const token = jwt.sign(
            { id: user._id, username, role: user.role },
            jwtSecret,
            {
              expiresIn: maxAge, // 3hrs in sec
            }
          );
          setCookie(res, "jwt", token, {
            path: "/",
            maxAge: 2592000,
            httpOnly: true,
          });
          /* res.cookie("jwt", token, {
            httpOnly: true,
            maxAge: maxAge * 1000, // 3hrs in ms
          }); */
          res.status(201).json({
            message: "User successfully Logged in",
            user: user._id,
            role: user.role,
          });
        } else {
          res
            .status(400)
            .json({ message: "Login not successful", userRole: user.role });
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
