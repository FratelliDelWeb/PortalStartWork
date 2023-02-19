import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../../../lib/dbConnect";
const Model = require("../../../../model/JobOffers");

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    try {
        //DB Connection
        let { db } = await dbConnect();
        console.log('**LOG** Candidates - Public - getOne - Init');
        const { _id }= req.query;
        const data = await Model.findById(_id);
        res.json(data);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
}