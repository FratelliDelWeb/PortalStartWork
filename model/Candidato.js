import mongoose from "mongoose";

const candidate_seq = mongoose.Schema({
  _id: { type: String, required: true },
  seq: { type: Number, default: 0 },
});
var counter =
  mongoose.models.candidate_seq ||
  mongoose.model("candidate_seq", candidate_seq);

const candidatoSchema = new mongoose.Schema({
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
  mansione: {
    type: String,
    required: true,
  },
  created_at: {
    type: String,
  },
  status: {
    type: String,
    required: true,
    default: "new",
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  skills: {
    type: [String],
    required: true,
  },
  location: {
    type: {},
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
  qualifica: {
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
  age: {
    type: Number,
    required: true,
  },
  rangeWithin: {
    type: Number,
    required: true,
  },
  publicName: {
    type: String,
  },
  candidateID: {
    type: Number,
  },
  languages: {
    type: [String],
    required: true,
  },
  educazione: {
    type: [{}],
  },
  note: {
    type: String,
  },
  premi: {
    type: [{}],
  },
  interstedTo: {
    type: [{}],
  },
});

//premi : *tiolo *periodo *luogo *descrizione
//educazione : *titolo *periodo *luogo *descrizione

candidatoSchema.pre("save", function (next) {
  var doc = this;
  counter
    .findByIdAndUpdate(
      { _id: "entityId" },
      { $inc: { seq: 1 } },
      { new: true, upsert: true }
    )
    .then(function (count) {
      console.log("...count: " + JSON.stringify(count));
      console.log("I'm the doc ==>");
      console.log(doc);
      doc.candidateID = count.seq;
      doc.publicName =
        Array.from(doc.name)[0] +
        Array.from(doc.surname)[0] +
        "_" +
        doc.candidateID;
      console.log(doc);
      next();
    })
    .catch(function (error) {
      console.error("counter error-> : " + error);
      throw error;
    });
});

module.exports =
  mongoose.models.candidatesstartwork ||
  mongoose.model("candidatesstartwork", candidatoSchema);
