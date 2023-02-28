import dbConnect from "../../../lib/dbConnect";
const Model = require("../../../model/User");
import { verify } from "../../../lib/jwt";
const secret = process.env.JWT_KEY;

export default async function handler(req, res) {
  //DB Connection
  let { db } = await dbConnect();

  console.log("**LOG** Users - Modify - Init");
  const data = req.body;
  const id = data.id;
  const fields = data.fields;
  const jwt = req.cookies.get("jwt");
  const token = await verify(jwt.value, secret);

  if(token.role === "admin" || id === token.id){

    if(token.role === "admin"){
            // Finds the user with the id
            await Model.findById(token.id)
            .then((user) => {
              // Third - Verifies the user is not an admin
              if (user.role !== "admin") {
                res.status(400).json({ message: "User is already an Admin" });
              }
    })
  }

    if (id && token.id) {
      await Model.findById(id)
        .then((client) => {
          for (var field of fields) {
            let fieldName = field.name;
            let fromValue = field.from;
            let toValue = field.to;

            if (JSON.stringify(client[fieldName]) === JSON.stringify(fromValue)) {
              client[fieldName] = toValue;
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
    } else {
      res
      .status(400)
      .json({ message: "An error occurred"});
    }
  }

}
