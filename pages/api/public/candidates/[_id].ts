import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../../../lib/dbConnect";
const Model = require("../../../../model/Candidato");

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    try {
        //DB Connection
        let { db } = await dbConnect();
        console.log('**LOG** Candidates - Public - getOne - Init');
        const { _id }= req.query;
        const data = await Model.findById(_id).select({ 
          "designation" : 1,
          "location": 1,
          "skills": 1,
          "category": 1,
          "destination": 1,
          "age": 1,
          "gender": 1,
          "publicName": 1,
          "created_at": 1,
          "mansione": 1,
          "avatar":1,
          "rangeWithin":1,

        
      });
        res.json(data);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
}