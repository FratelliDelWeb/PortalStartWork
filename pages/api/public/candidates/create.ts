const Candidato = require("../../../../model/Candidato");
const User = require("../../../../model/User");
import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../../../lib/dbConnect";
const bcrypt = require("bcryptjs");

export default async function handler(  
  req : NextApiRequest,
  res: NextApiResponse
  ) {
  //DB Connection
  let db = await dbConnect();

  console.log("**LOG** Candidato - Public - Create - Init");

  const { name,
          surname,
          phone,
          mansione,
          status,
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
          interstedTo,
          credentials
        } = req.body;
        console.log(req.body)
        console.log(credentials)
  const { username, password, email } = credentials;


    console.log('**API** Public - Candidati - Create - Creating Candidate...');

    const user = await User.findOne({ username });
    if (user) {
      res.status(400).json({
        message: "Creation not successful",
        error: "Username already exists",
      });
    } else {
      await Candidato.create({
        name: name,
        surname: surname,
        phone: phone,
        mansione: mansione,
        status: status,
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
        .then((candidato) => {
          if (password.length < 6) {
            return res.status(400).json({ message: "Password less than 6 characters" });
          }
          bcrypt.hash(password, 10).then(async (hash) => {
            await User.create({
              _id: candidato._id,
              username,
              password: hash,
              email,
              role: "candidate",
            })
              .then((user) => {
                res.status(201).json({
                  message: "Candidate successfully created",
                  publicName: candidato.publicName,
                });
              })
              .catch((error) =>    
                res.status(400).json({
                  message: "User not successful created",
                  error: error.message,
                })    
              );
          })
        })
        .catch((error) =>
          res.status(400).json({
            message: "Candidate not successful created",
            error: error.message,
          })
        );
    }
}
