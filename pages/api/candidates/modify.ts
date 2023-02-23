import dbConnect from "../../../lib/dbConnect";
const Model = require("../../../model/Candidato");

export default async function handler(req, res) {
  //DB Connection
  let { db } = await dbConnect();

  console.log("**LOG** Candidates - Modify - Init");
  const data = req.body;
  const id = data.id;
  const fields = data.fields;

  if (id) {
    await Model.findById(id)
      .then((client) => {
        console.log("Il Candidato =>");
        console.log(client);
        for (var field of fields) {
          let fieldName = field.name;
          let fromValue = field.from;
          let toValue = field.to;

          //Gestione offerte di lavoro
          if(fieldName === "interstedTo"){
            console.log('Candidate - Check Offers...')
              if(Array.isArray(toValue)){
                for (var offer of toValue){
                  if(client[fieldName].indexOf(offer) >= 0){
                    console.log("Offer => ")
                    console.log(offer)
                    res
                      .status(402)
                      .json({ field: fieldName, message: "Already candidated to this offer" });
                    process.exit(1);
                  }
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
