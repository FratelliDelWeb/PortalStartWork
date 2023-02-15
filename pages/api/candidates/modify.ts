import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../../lib/dbConnect";
const Model = require("../../../model/Candidato");

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    //DB Connection
    let { db } = await dbConnect();

    console.log('**LOG** Candidates - Modify - Init');
    const { role, id } = req.body;
    if (role && id) {
      if (role === "admin") {
        await Model.findById(id)
          .then((obj) => {
            // Third - Verifies the user is not an admin
            if (obj.role !== "admin") {
                obj.role = role;
                obj.save((err) => {
                //Monogodb error checker
                if (err) {
                  res
                    .status(400)
                    .json({ message: "An error occurred", error: err.message });
                  process.exit(1);
                }
                res.status(201).json({ message: "Update successful", obj });
              });
            } else {
              res.status(400).json({ message: "User is already an Admin" });
            }
          })
        }
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}