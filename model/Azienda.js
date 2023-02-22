import mongoose from "mongoose";

const company_seq = mongoose.Schema({
  _id: { type: String, required: true },
  seq: { type: Number, default: 0 },
});
var counter =
  mongoose.models.company_seq || mongoose.model("company_seq", company_seq);

const companySchema = new mongoose.Schema({
  // no _id designation, mongo will create
  name: {
    type: String,
    required: true,
  },
  piva: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  indirizzo: {
    type: {},
    required: true,
  },
  settore: {
    type: [String],
    required: true,
  },
  ccnl: {
    type: String,
    required: true,
  },
  workArea: {
    type: String,
    required: true,
  },
  nomeReferente: {
    type: String,
    required: true,
  },
  cognomeReferente: {
    type: String,
    required: true,
  },
  interstedTo: {
    type: [String],
    required: true,
  },
  created_at: {
    type: String,
    default: new Date().toISOString(),
  },
});

companySchema.pre("save", function (next) {
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
  mongoose.models.company || mongoose.model("company", companySchema);
