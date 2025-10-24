const mongoose = require('mongoose');

const FormSchema = new mongoose.Schema({
  driverId: { type: String, required: true },
  fullName: { type: String, required: true },
  mobileNumber: { type: String, required: true },
  busNumber: { type: Number, required: true },
  dateOfApplying: { type: Date, required: true },
  problems: [String],
  otherProblem: String,
  description: String,
  status: { type: String, default: 'Pending' }
}, { timestamps: true });

module.exports = mongoose.model('FormData', FormSchema);
