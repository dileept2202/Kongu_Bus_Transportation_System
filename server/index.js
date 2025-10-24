require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Driver = require('./models/Driver');
const Admin = require('./models/Admin');
const FormData = require('./models/FormData');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Database connection failed', err));

app.get('/', (req, res) => {
  res.send("Backend Server is running");
});

// get all drivers
app.get('/api/drivers', async (req, res) => {
  try {
    const drivers = await Driver.find({});
    res.json(drivers);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// get all admins
app.get('/api/admins', async (req, res) => {
  try {
    const admins = await Admin.find({});
    res.json(admins);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// driver login
app.post('/api/login/driver', async (req, res) => {
  try {
    const { driverId, password } = req.body;
    const driver = await Driver.findOne({ driverId });

    if (!driver || driver.password !== password) {
      return res.status(401).json({ success: false, message: 'Invalid ID or password' });
    }

    res.json({ success: true, message: 'Login successful' });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// admin login
app.post('/api/login/admin', async (req, res) => {
  try {
    const { adminId, password } = req.body;
    const admin = await Admin.findOne({ adminId });

    if (!admin || admin.password !== password) {
      return res.status(401).json({ success: false, message: 'Invalid ID or password' });
    }

    res.json({ success: true, message: 'Login successful' });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
});


// submit bus form
app.post('/api/form/submit', async (req, res) => {
  try {
    const newForm = new FormData(req.body);
    await newForm.save();
    res.status(201).json({ success: true, message: 'Form submitted successfully' });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Error submitting form' });
  }
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
