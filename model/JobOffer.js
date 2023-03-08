import mongoose from "mongoose";
const job_seq = mongoose.Schema({
  _id: { type: String, required: true },
  seq: { type: Number, default: 0 },
});
var counter =
  mongoose.models.job_seq ||
  mongoose.model("job_seq", job_seq);

const jobOffersSchema = new mongoose.Schema({
  // no _id designation, mongo will create
  jobTitle: {
    type: String,
    required: true,
  },
  logo: {
    type: String,
    required: true,
  },
  note: {
    type: String,
    required: true,
  },
  codiceJob: {
    type: String,
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
    default: new Date().toISOString(),
  },
  experience: {
    type: String,
    required: true,
  },
  note: {
    type: String,
    required: true,
  },
  candidatesList: {
    type: [],
  },
});

//jobType . *style, *class
//location : *city *lat* lang*
jobOffersSchema.pre("save", function (next) {
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
      if (!doc.codiceJob) {
        doc.codiceJob = count.seq;
        console.log(doc);
      }
      next();
    })
    .catch(function (error) {
      console.error("counter error-> : " + error);
      next(error);
    });
});

module.exports =
  mongoose.models.joboffers || mongoose.model("joboffers", jobOffersSchema);

