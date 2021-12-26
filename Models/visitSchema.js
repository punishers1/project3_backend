const mongoose = require('mongoose');

const visitSchema = new mongoose.Schema({
      patientId:{type: mongoose.Schema.Types.ObjectId, ref: 'Patients'},
      date: String,
      nurseId:String,
      doctorId: String,
      temperature: String,
      bp: String,
      weight: String,
      typeStatus: String,
      heartRate: String,
      drTreatment: String,
      diagnose: String,
      drNotes: String,
      checkedByNurse: Boolean,
      checkedByDr: Boolean,
})

const Visit = mongoose.model("Visit", visitSchema);
module.exports= {Visit};