// const User = require("../../Models/UserSchema")
const Patients = require("../../models/PatientsSchema");
const {Visit} = require("../../models/visitSchema");

// find one patients
const searchPatient = (req, res) => {
  Patients.findOne({ nationalId: req.params.id }, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      if (!result) {
        res.status(400).send("not found patient");
        return;
      } else {
        res.status(200).json({ patient: result });
      }
    }
  });
};

/* ----------------------------- add new patient ---------------------------- */
const AddNewPatient = (req, res) => {
  const newPatient = new Patients({
    fullName: req.body.fullName,
    nationalId: req.body.nationalId,
    gender: req.body.gender,
    phoneNumber: req.body.phoneNumber,
  });

  newPatient
    .save()
    .then((err, result) => res.send(result))
    .catch((err) => console.log(err));
};

//updatePatientByNurse, updatePatientByDr
// const updatePatient = (req, res) => {
//   //find the patient by id/national id then update patient details.
//   const updatePatient = new Patients({
//     fullName: req.body.fullName,
//     nationalId: req.body.nationalId,
//     gender: req.body.gender,
//     phoneNumber: req.body.phoneNumber,
//     visit: [
//       {
//         date: req.body.date,
//         temperature: req.body.temperature,
//         bloodPressure: req.body.bloodPressure,
//         weight: req.body.weight,
//         heartRate: req.body.heartRate,
//         diagnose: req.body.diagnose,
//         drNotes: req.body.drNotes,
//       },
//     ],
//   });
//   updatePatient
//     .save()
//     .then((err, result) => res.send(result))
//     .catch((err) => console.log(err));
// };

/* -------------------------- addVisit -------------------------- */

// console.log();
// let date1= new Date().toDateString();
// let date2= date1.split(" ");

const addVisit = (req, res) => {
  Patients.findOne({ nationalId: req.params.id }, (err, result) => {
    if (err) {
      console.log(err.message);
    } else {
      if (!result) {
        res.status(400).send("not found patient");
        return;
      } else {
        //constructor method to create Visit Object and then push the new visit inside visit array
        //const newVisit  = new AddVisit(new Date().toString(), false, false);
        const visit = new Visit({
          patientId: result._id,
          date: new Date().toDateString(),
          checkedByNurse: false,
          checkedByDr: false,
        });
        visit
          .save()
          .then((visit) => {
            res.json({ status: "success", message: "saved successfully" });
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }
  }).catch((err) => {
    console.log(err);
  });
};



/* ---------------------------- getAllVisits for Nurse--------------------------- */
const getAllVisits = (req, res) => {
  Visit.find({ date: new Date().toDateString(), checkedByNurse: false })
  .populate("patientId")
  .exec(function (err, result) {
    // if (err) res.json(err);
    res.json({ result: result });
  });
  // Visit.find({},(err,result)=>{res.json(result)})
};

/* ------------------------- update visit from nurse ------------------------ */
const updatePatientByDate = (req, res) => {
  Visit.findOneAndUpdate(
    { patientId: req.params.id },
    {
      checkedByNurse: true,
      temperature: req.body.temperature,
      weight: req.body.weight,
      bp: req.body.bp,
      typeStatus:req.body.typeStatus,
      heartRate: req.body.heartRate,
      checkedByDr: false,
    },
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.json({ status: "success", message: "saved succesfully", result: result });
      }
    }
  );
};


/* --------------------------- update Visit By Dr --------------------------- */

const updatePatientByDateFromDr = (req, res) => {
  Visit.findOneAndUpdate(
    { patientId: req.params.id },
    {
     
      drTreatment: req.body.drTreatment,
      diagnose: req.body.diagnose,
      drNotes: req.body.drNotes,
      typeStatus:req.body.typeStatus,
      heartRate: req.body.heartRate,
      checkedByDr: true,
    },
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.json({ status: "success", message: "saved succesfully", result: result });
      }
    }
  );
};

/* ---------------------------- find visit for dr --------------------------- */

const getAllVisitsforDr = (req, res) => {
  Visit.find({ date: new Date().toDateString(), checkedByNurse: true })
  .populate("patientId")
  .exec(function (err, result) {
    
    res.json({ result: result });
  });
  
};

/* ----------------------------- get All Patient ---------------------------- */
const getAllPatients = (req, res) => {
  Patients.find({}, (err, result) => {
    res.json({ result: result });
  });
};

module.exports = {
  getAllVisits,
  updatePatientByDate,
  updatePatientByDateFromDr,
  getAllPatients,
  addVisit,
  AddNewPatient,
  searchPatient,
  getAllVisitsforDr
};
