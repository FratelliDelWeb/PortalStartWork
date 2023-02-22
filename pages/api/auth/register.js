const User = require("../../../model/User");
const bcrypt = require("bcryptjs");
import dbConnect from "../../../lib/dbConnect";
import { sign } from "../../../lib/jwt";
import { setCookie } from "../../../utils/cookie";
const jwtSecret = process.env.JWT_KEY;

export default async function handler(req, res, next) {
  //DB Connection
  let { db } = await dbConnect();
  console.log("**LOG** Users - Registration - Init");

  const { username, password, email } = req.body;
  if (password.length < 6) {
    return res.status(400).json({ message: "Password less than 6 characters" });
  }
  bcrypt.hash(password, 10).then(async (hash) => {
    await User.create({
      username,
      password: hash,
      email,
    })
      .then((user) => {
        try {
          const token = sign(
            { id: user._id, username, role: user.role },
            jwtSecret
          );
          setCookie(res, "jwt", token, {
            path: "/",
            httpOnly: true,
          });
          res.status(201).json({
            message: "User successfully created",
            user: user._id,
          });
        } catch (error) {
          res.status(400).json({
            message: "jwt not assigned, user created",
            error: error,
          });
        }
      })
      .catch((error) =>
        res.status(400).json({
          message: "User not successful created",
          error: error.message,
        })
      );
  });
}
