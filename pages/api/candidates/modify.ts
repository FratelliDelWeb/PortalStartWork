import dbConnect from "../../../lib/dbConnect";
const Model = require("../../../model/Candidato");
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

export default async function handler(req, res) {
  const restriction = basicAuth(req);
  if(!restriction){
    return res.status(401).end();
  }
  //DB Connection
  let { db } = await dbConnect();

  console.log("**LOG** Candidates - Modify - Init");
  const data = req.body;
  const id = data.id;
  const fields = data.fields;

  if (id) {
    await Model.findById(id)
      .then((client) => {
        for (var field of fields) {
          let fieldName = field.name;
          let fromValue = field.from;
          let toValue = field.to;

          //Gestione offerte di lavoro
          if(fieldName === "interstedTo"){
            console.log('Candidate - Check Offers...')
              if(Array.isArray(toValue)){
                  console.log("Offers => ")
                  console.log(toValue[toValue.length - 1])
                  if(client[fieldName].indexOf(toValue[toValue.length - 1]) >= 0){
                    return res
                      .status(402)
                      .json({ field: fieldName, message: "Already candidated to this offer" });
                  }
                }
          }

          if (JSON.stringify(client[fieldName]) === JSON.stringify(fromValue)) {
            client[fieldName] = toValue;
          } else {
            res
              .status(402)
              .json({ field: fieldName, message: "Not same value" });
          }
        }
        client.save((err) => {
          //Monogodb error checker
          if (err) {
            res
              .status(400)
              .json({ message: "An error occurred", error: err.message });
            process.exit(1);
          }
          res.status(201).json({ message: "Update successful", client });
        });
      })
      .catch((error) => {
        res
          .status(400)
          .json({ message: "An error occurred", error: error.message });
      });
  }
}
