// const User = require("../../Models/UserSchema")
const Patients= require("../../models/PatientsSchema")




const AddNewPatient = (req,res)=>{
    const newPatient = new Patients({
    fullName: req.body.fullName,
  nationalId:req.body.nationalId ,
  gender: req.body.gender ,
  phoneNumber:req.body.phoneNumber ,
  visit: [
    {
      date: req.body.date ,
      temperature: req.body.temperature,
      bloodPressure: req.body.bloodPressure,
      weight: req.body.weight,
      heartRate: req.body.heartRate ,
      diagnose: req.body.diagnose,
      drNotes: req.body.drNotes ,
    },
  ],
});
   
    newPatient
    .save()
    .then((err, result) =>res.send(result))
    .catch((err) => console.log(err));
    
}


const updatePatient=(req,res)=>{
    const updatePatient = new Patients({
        fullName: req.body.fullName,
      nationalId:req.body.nationalId ,
      gender: req.body.gender ,
      phoneNumber:req.body.phoneNumber ,
      visit: [
        {
          date: req.body.date ,
          temperature: req.body.temperature,
          bloodPressure: req.body.bloodPressure,
          weight: req.body.weight,
          heartRate: req.body.heartRate ,
          diagnose: req.body.diagnose,
          drNotes: req.body.drNotes ,
        },
      ],
    });
    updatePatient
    .save()
    .then((err, result) =>res.send(result))
    .catch((err) => console.log(err));
    
}



const getAllPatients= (req,res)=>{

    Patients.find({}, (err, result) =>
    res.json({ result: result })
  );
}

module.exports={getAllPatients, AddNewPatient,updatePatient}
