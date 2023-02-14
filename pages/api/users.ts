import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../lib/mongodb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let { db } = await connectToDatabase();
  console.log(db)
  const blogs = await db.collection("users").find().toArray();

  res.status(200).json({ blogs });
}