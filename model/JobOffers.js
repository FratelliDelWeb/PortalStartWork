
/* const jobOffersSchema = new Mongoose.Schema(
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
); */




const Mongoose = require("mongoose");

const jobOffersSchema = new Mongoose.Schema({
  // no _id designation, mongo will create
  jobTitle : {
    type: String,
    required: true,
  },

  qualification: {
    type: String,
    required: true,
  },
 
});

/* {
  "id": 1,
  "avatar": "/images/resource/candidate-1.png",
  "name": "Darlene Robertson",
  "designation": "UI Designer",
  "location": "London, UK",
  "hourlyRate": "99",
  "tags": [
    "App",
    "Design",
    "Digital"
  ],
  "destination": {
    "min": 0,
    "max": 10
  },
  "category": "Residential",
  "gender": "Male",
  "created_at": "Last Hour",
  "experience": "Fresh",
  "qualification": "Certificate"
} */

module.exports =
  Mongoose.models.joboffers ||
  Mongoose.model("joboffers",jobOffersSchema);
