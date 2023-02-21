const Model = require("../../../../model/Candidato");
import dbConnect from "../../../../lib/dbConnect";

export default async function handler(req, res, next) {
  //DB Connection
  let db = await dbConnect();

  console.log("**LOG** Candidato - Public - Create - Init");

  const { name,
          surname,
          phone,
          designation,
          status,
          email,
          tags,
          location,
          gender,
          experience,
          qualification,
          category,
          avatar,
          age,
          rangeWithin
        } = req.body;


    console.log('**API** Public - Candidati - Create - Creating Candidate...');

    await Model.create({
        name: name,
        surname: surname,
        phone: phone,
        designation: designation,
        status: status,
        email: email,
        tags: tags,
        location: location,
        gender: gender,
        experience: experience,
        qualification: qualification,
        category: category,
        avatar: avatar,
        age: age,
        rangeWithin: rangeWithin
    })
      .then((user) => {
        res.status(201).json({
          message: "Candidate successfully created",
          user: user.publicName,
        });
      })
      .catch((error) =>
        res.status(400).json({
          message: "Candidate not successful created",
          error: error.message,
        })
      );

}
