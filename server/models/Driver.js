const mongoose = require('mongoose');

const DriverSchema = new mongoose.Schema({
  driverId: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

module.exports = mongoose.model('Driverlogin', DriverSchema,'Driverlogin');
