const mongoose =require('mongoose');
 const Schema = mongoose.Schema;

 const PatientsSchema= new Schema({
    fullName: String,
    nationalId:String,
    gender: String,
    phoneNumber: String,
    visit:[{
    date: String,
    temperature:Number,
    bloodPressure: String,
    weight: String,
    heartRate: String,
    diagnose: String,
    drNotes:String,
    }]
 });



 const Patients = mongoose.model('Patients', PatientsSchema );
 module.exports= Patients;
