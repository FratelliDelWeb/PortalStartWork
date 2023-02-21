const Model = require("../../../model/JobOffer");
import dbConnect from "../../../lib/dbConnect";

export default async function handler(req, res, next) {
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
          message: "Candidate successfully created",
          publicName: user.publicName,
        });
      })
      .catch((error) =>
        res.status(400).json({
          message: "Candidate not successful created",
          error: error.message,
        })
      );

}
