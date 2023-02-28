import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../../lib/dbConnect";
const Model = require("../../../model/JobOffer");
import { getToken } from "next-auth/jwt"

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

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const restriction = basicAuth(req);
  if(!restriction){
    return res.status(401).end();
  }
    try {
        //DB Connection
        let { db } = await dbConnect();
        console.log('**LOG** Candidates - getOne - Init');
        const { _id }= req.query;
        const data = await Model.findById(_id);
        res.json(data);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
}