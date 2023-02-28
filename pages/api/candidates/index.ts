import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../../lib/dbConnect";
const Model = require("../../../model/Candidato")
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
    console.log('**LOG** Candidates - getAll - Init');

    const data = await Model.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}