const Candidato = require("../../../../model/Candidato");
const User = require("../../../../model/User");
import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../../../lib/dbConnect";
const bcrypt = require("bcryptjs");
const jwtSecret = process.env.JWT_KEY 
import { sign } from "../../../../lib/jwt";
import { setCookie } from "../../../../utils/cookie";

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


    console.log('**API** Public - Candidati - Create - Creating Candidate...');

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
        const { username, password, email } = credentials;
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
              const token = sign(
                { id: user._id, username, role: user.role },
                jwtSecret
              );
              setCookie(res,"jwt", token, {
                httpOnly: true,
              });
              res.status(201).json({
                message: "Candidate successfully created",
                publicName: candidato.publicName,
              });
            })
            .catch((error) =>{        
              return res.status(400).json({
                message: "Candidate not successful created",
                error: error.message,
              });
            }
            );
        })
      })
      .catch((error) => {        
        res.status(400).json({
          message: "Candidate not successful created",
          error: error.message,
        });
      }
      );

}
