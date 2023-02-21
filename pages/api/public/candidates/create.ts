const Model = require("../../../../model/Candidato");
import dbConnect from "../../../../lib/dbConnect";

export default async function handler(req, res, next) {
  //DB Connection
  let db = await dbConnect();

  console.log("**LOG** Candidato - Public - Create - Init");

  const { name,
          surname,
          phone,
          mansione,
          status,
          email,
          skills,
          location,
          gender,
          experience,
          qualifica,
          destination,
          category,
          avatar,
          age,
          rangeWithin,
          languages,
          educazione,
          note,
          premi,
          interstedTo
        } = req.body;


    console.log('**API** Public - Candidati - Create - Creating Candidate...');

    await Model.create({
        name: name,
        surname: surname,
        phone: phone,
        mansione: mansione,
        status: status,
        email: email,
        skills: skills,
        location: location,
        gender: gender,
        experience: experience,
        qualifica: qualifica,
        destination: destination,
        category: category,
        avatar: avatar,
        age: age,
        rangeWithin: rangeWithin,
        languages: languages,
        educazione: educazione,
        note: note,
        premi: premi,
        interstedTo: interstedTo,
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
