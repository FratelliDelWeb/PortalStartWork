import dbConnect from "../../../../lib/dbConnect";
const Model = require("../../../../model/Candidato");

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
        for (field in fields) {
          let fieldName = fields[field].name;
          let fromValue = fields[field].from;
          let toValue = fields[field].to;

          if (client[fieldName] === fromValue) {
            client[fieldName] = toValue;
            console.log(client[fieldName]);
          } else {
            res
              .status(402)
              .json({ field: fieldName, message: "Not same value" });
          }
        }
        console.log(client);
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
