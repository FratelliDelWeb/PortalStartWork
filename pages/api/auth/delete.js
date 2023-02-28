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
  console.log("**LOG** Users - Delete - Init");

  const { id } = req.body;
  await User.findById(id)
    .then((user) => user.remove())
    .then((user) =>
      res.status(201).json({ message: "User successfully deleted", user })
    )
    .catch((error) =>
      res
        .status(400)
        .json({ message: "An error occurred", error: error.message })
    );
}
