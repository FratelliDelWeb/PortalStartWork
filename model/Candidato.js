const Mongoose = require("mongoose");

const candidatoSchema = new Mongoose.Schema({
  // no _id designation, mongo will create
  name: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  designation: {
    type: String,
    required: true,
  },
  created_at: {
    type: String,
    required: true,
    default: Date.now.toString(),
  },
  status: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  tags: {
    type: [String],
    required: true,
  },
  location: {
    type: [String],
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  experience: {
    type: String,
    required: true,
  },
  qualification: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    required: false,
  },
  destination: {
    type: [String],
    required: false,
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
  Mongoose.models.candidatesstartwork ||
  Mongoose.model("candidatesstartwork", candidatoSchema);
