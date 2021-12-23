const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PatientsSchema = new Schema({
  fullName: String,
  nationalId: String,
  gender: String,
  phoneNumber: String,
  
  
});

const Patients = mongoose.model("Patients", PatientsSchema);
module.exports = Patients;
