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
        "tags": 1,
        "experience": 1,
        "qualification" : 1,
        "category": 1,
        "destination": 1,
    });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}