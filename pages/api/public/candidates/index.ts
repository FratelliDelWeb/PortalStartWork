import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../../../lib/dbConnect";
const Model = require("../../../../model/Candidato")

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    //DB Connection
    let { db } = await dbConnect();
    console.log('**LOG** Candidates - Public - getAll - Init');
    /* {status: { $eq: 'Approved' }} */ // Da aggiungere in seguito al find
    const data = await Model.find().select({ 
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
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}