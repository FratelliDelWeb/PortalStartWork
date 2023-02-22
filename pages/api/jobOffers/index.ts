import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../../lib/dbConnect";
const Model = require("../../../model/JobOffer")

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    //DB Connection
    let { db } = await dbConnect();
    console.log('**LOG** Candidates - getAll - Init');

    const data = await Model.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}