const mongoose = require('mongoose');

const FormSchema = new mongoose.Schema({
  driverId: { type: String, required: true },
  mobileNumber: String,
  busNumber: String,
  problem: String,
  description: String,
  image: String,
  status: { type: String, default: 'Pending' }
}, { timestamps: true });

module.exports = mongoose.model('FormDetails', FormSchema);
