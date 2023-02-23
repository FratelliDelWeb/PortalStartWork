import mongoose from "mongoose";

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

module.exports =
  mongoose.models.company || mongoose.model("company", companySchema);
