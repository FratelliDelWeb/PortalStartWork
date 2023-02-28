const User = require("../../../model/User");
import dbConnect from "../../../lib/dbConnect";
import { getToken } from "next-auth/jwt";

const basicAuth = async (req) => {
  const token = await getToken({ req });
  if (token) {
    // Signed in
    return true;
  } else {
    // Not Signed in
    return false;
  }
};

export default async function handler(req, res, next) {
  const restriction = await basicAuth(req);
  if (!restriction) {
    return res.status(401).end();
  }
  //DB Connection
  let { db } = await dbConnect();
  console.log("**LOG** Users - Update - Init");

  const { role, id } = req.body;
  // First - Verifying if role and id is presnt
  if (role && id) {
    // Second - Verifying if the value of role is admin
    if (role === "admin") {
      // Finds the user with the id
      await User.findById(id)
        .then((user) => {
          // Third - Verifies the user is not an admin
          if (user.role !== "admin") {
            user.role = role;
            user.save((err) => {
              //Monogodb error checker
              if (err) {
                res
                  .status("400")
                  .json({ message: "An error occurred", error: err.message });
                process.exit(1);
              }
              res.status("201").json({ message: "Update successful", user });
            });
          } else {
            res.status(400).json({ message: "User is already an Admin" });
          }
        })
        .catch((error) => {
          res
            .status(400)
            .json({ message: "An error occurred", error: error.message });
        });
    }
  }
}
