const Mongoose = require("mongoose");

const jobOffersSchema = new Mongoose.Schema({
  // no _id designation, mongo will create
  jobTitle: {
    type: String,
    required: true,
  },
  logo: {
    type: String,
    required: true,
  },
  descrizione: {
    type: String,
    required: true,
  },
  codiceJob: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  jobType: {
    type: [{}],
    required: true,
  },
  location: {
    type: {},
    required: true,
  },
  created_at: {
    type: String,
    required: true,
  },
  experience: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    require: true,
  },
});

//jobType . *style, *class
//location : *city *lat* lang*

module.exports =
  Mongoose.models.joboffers || Mongoose.model("joboffers", jobOffersSchema);
