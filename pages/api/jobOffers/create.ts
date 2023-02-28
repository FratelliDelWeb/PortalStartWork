const Model = require("../../../model/JobOffer");
import dbConnect from "../../../lib/dbConnect";
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

export default async function handler(req, res, next) {
  const restriction = basicAuth(req);
  if(!restriction){
    return res.status(401).end();
  }
  //DB Connection
  let db = await dbConnect();

  console.log("**LOG** JobOffers - Create - Init");

  const { jobTitle,
    logo,
    descrizione,
    codiceJob,
    company,
    jobType,
    location,
    experience,
    email
        } = req.body;


    console.log('**API** JobOffers - Create - Creating jobOffer...');

    await Model.create({
        jobTitle: jobTitle,
        logo: logo,
        descrizione: descrizione,
        codiceJob: codiceJob,
        company: company,
        jobType: jobType,
        experience: experience,
        location: location,
        email: email,
    })
      .then((user) => {
        res.status(201).json({
          message: "JobOffer successfully created",
          publicName: user.publicName,
        });
      })
      .catch((error) =>
        res.status(400).json({
          message: "JobOffer not successful created",
          error: error.message,
        })
      );

}
