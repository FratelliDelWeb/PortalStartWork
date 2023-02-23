const Azienda = require("../../../../model/Azienda");
import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../../../lib/dbConnect";

export default async function handler(  
  req : NextApiRequest,
  res: NextApiResponse
  ) {
  //DB Connection
  let db = await dbConnect();

  console.log("**LOG** Azienda - Public - Create - Init");

  const { name,
          surname,
          phone,
          piva,
          indirizzo,
          settore,
          ccnl,
          workArea,
          nomeReferente,
          cognomeReferente,
          interstedTo,
          email
        } = req.body;


    console.log('**API** Public - Azienda - Create - Creating Azienda...');

      await Azienda.create({
        name: name,
        surname: surname,
        phone: phone,
        piva: piva,
        email: email,
        indirizzo: indirizzo,
        settore: settore,
        ccnl: ccnl,
        workArea: workArea,
        nomeReferente: nomeReferente,
        cognomeReferente: cognomeReferente,
        interstedTo: interstedTo,
      })
        .then((company) => {
          res.status(201).json({
            message: "Company succesfull created",
            company: company.piva,
          });
        })
        .catch((error) =>
          res.status(400).json({
            message: "Company not successfull created",
            error: error.message,
          })
        );
}
