var mongoose = require("mongoose");

var documentSchema = new mongoose.Schema(
  {
  

    jobTitle : {
        type: String,
        required: true,
      },
      company: {
        type: String,
        required: true,
      },
      logo: {
        type: String,
        required: true,
      },
      logo: {
        type: String,
        required: true,
      },
      time: {
        type: String,
        required: true,
      },
      location:{
        type: String,
        required: true,
      },
      salary:{
        type: String,
        required: true,
      },
      jobType:{
        type: [String],
        required: true,
      },
      link:{
        type: [String],
        required: true,  
      },
      experience:{
        type: String,
        required: true,  
      },

  },
  {
    collection: "offers",
  }
);

module.exports = new mongoose.model("jobOffers", documentSchema, "jobOffers");
