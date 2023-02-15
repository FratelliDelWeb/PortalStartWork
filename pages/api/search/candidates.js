import dbConnect from "../../../lib/dbConnect";
const Model = require("../../../model/Candidato");

export default async function handler(req, res, next) {
  try {
    //DB Connection
    let { db } = await dbConnect();
    console.log("**LOG** Candidates - Search - Init");

    const body = req.body;
    const search = body.query;
    const page = body.page;
    const limit = body.limit;

    let getType = (field) => {
      return Model.schema.paths[field].instance;
    };

    let query = {
      $and: [],
      $or: [],
    };

    if (search) {
      for (let i = 0; i < Object.keys(search).length; i++) {
        if (search[Object.keys(search)[i]]) {
          const field = search[Object.keys(search)[i]];
          const fieldName = Object.keys(search)[i];
          const fieldType = getType(fieldName);
          if (field.length > 0) {
            switch (fieldType) {
              case "Number":
                for (let k = 0; k < field.length; k++) {
                  let fieldMDB = {};
                  /*                                     let equalsComparator = [];
                                  let inequalsComparator = []; */
                  switch (field[k].operation) {
                    case "not contains":
                      //Number can't
                      break;
                    case "equal":
                      fieldMDB["$in"] = field[k].value;
                      break;
                    case "not equal":
                      fieldMDB["$ne"] = field[k].value;
                      break;
                    case "is empty":
                      fieldMDB["$exists"] = true;
                      fieldMDB["$in"] = ["", null, 0];
                      break;
                    case "is not empty":
                      fieldMDB["$exists"] = true;
                      fieldMDB["$ne"] = "";
                      break;
                    case "greater than":
                      fieldMDB["$gt"] = field[k].value;
                      break;
                    case "lower than":
                      fieldMDB["$lt"] = field[k].value;
                      break;
                    case "lower than equal":
                      fieldMDB["$lte"] = field[k].value;
                      break;
                    case "greater than equal":
                      fieldMDB["$gte"] = field[k].value;
                      break;
                    default:
                      fieldMDB = field[k].value;
                      break;
                  }

                  const objectToPush = {};
                  switch (field[k].logic) {
                    case "or":
                      objectToPush[fieldName] = fieldMDB;
                      query["$or"].push(objectToPush);
                      break;
                    case "and":
                      objectToPush[fieldName] = fieldMDB;
                      query["$and"].push(objectToPush);
                      break;
                    default:
                      objectToPush[fieldName] = fieldMDB;
                      query["$or"].push(objectToPush);
                      break;
                  }
                }
                break;
              case "String":
                for (let k = 0; k < field.length; k++) {
                  let fieldMDB = {};
                  /*                                     let equalsComparator = [];
                                  let inequalsComparator = []; */
                  switch (field[k].operation) {
                    case "not contains":
                      fieldMDB["$not"] = new RegExp(field[k].value, "i");
                      break;
                    case "equal":
                      fieldMDB = field[k].value;
                      break;
                    case "not equal":
                      fieldMDB["$ne"] = field[k].value;
                      break;
                    case "is empty":
                      fieldMDB["$exists"] = true;
                      fieldMDB["$in"] = ["", null, 0];
                      break;
                    case "is not empty":
                      fieldMDB["$exists"] = true;
                      fieldMDB["$ne"] = "";
                      break;
                    default:
                      fieldMDB["$in"] = new RegExp(field[k].value, "i");
                      break;
                  }

                  const objectToPush = {};
                  switch (field[k].logic) {
                    case "or":
                      objectToPush[fieldName] = fieldMDB;
                      query["$or"].push(objectToPush);
                      break;
                    case "and":
                      objectToPush[fieldName] = fieldMDB;
                      query["$and"].push(objectToPush);
                      console.log("Sotto query");
                      console.log(query);
                      break;
                    default:
                      objectToPush[fieldName] = fieldMDB;
                      query["$or"].push(objectToPush);
                      break;
                  }
                }
                break;
              default:
                break;
            }
          }
        }
      }
    }
    //Per non rompere la query
    if (!query["$or"].length > 0) {
      delete query["$or"];
    }

    if (!query["$and"].length > 0) {
      delete query["$and"];
    }

    console.log(JSON.stringify(query));
    const data = await Model.find(query)
      .limit(limit * 1)
      .skip((page - 1) * limit);

    const count = await Model.count().count();

    // return response with posts, total pages, and current page
    res.json({
      data,
      totalPages: Math.ceil(count / limit),
      currentPage: page,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
