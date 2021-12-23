// const User = require("../../Models/UserSchema")
const Patients = require("../../models/PatientsSchema");
const Visit = require("../../models/visitSchema");

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
        //constructor method to create Visit Object and then push the new visit inside visit array
        const newVisit = new AddVisit(new Date().toDateString(), false, false);
        result.visit.push(newVisit);

        Patients.findByIdAndUpdate(result._id, {
          visit: result.visit,
        })
          .then((result) => {
            res.send("updated");
            return;
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }
    res.json({ result: result });
  });
};

function AddVisit(date, checkedByNurse, checkedByDr) {
  this.date = date;
  this.checkedByNurse = checkedByNurse;
  this.checkedByDr = checkedByDr;
}
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
const updatePatient = (req, res) => {
  //find the patient by id/national id then update patient details.
  const updatePatient = new Patients({
    fullName: req.body.fullName,
    nationalId: req.body.nationalId,
    gender: req.body.gender,
    phoneNumber: req.body.phoneNumber,
    visit: [
      {
        date: req.body.date,
        temperature: req.body.temperature,
        bloodPressure: req.body.bloodPressure,
        weight: req.body.weight,
        heartRate: req.body.heartRate,
        diagnose: req.body.diagnose,
        drNotes: req.body.drNotes,
      },
    ],
  });
  updatePatient
    .save()
    .then((err, result) => res.send(result))
    .catch((err) => console.log(err));
};

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

function AddVisit(date, checkedByNurse, checkedByDr) {
  this.date = date;
  this.checkedByNurse = checkedByNurse;
  this.checkedByDr = checkedByDr;
}

/* ---------------------------- findPatientbyDate --------------------------- */

const updateVisitByNurse = (req, res) => {
  Visit.findOneAndUpdate(
    { date: new Date().toDateString(),checkedByNurse: false },
    {
      
      nurseId: req.body.nurseId,
      temperature: req.body.temperature,
      bp: req.body.bp,
      weight: req.body.weight,
      heartRate: req.body.heartRate,
      checkedByNurse: req.body.checkedByNurse,
      checkedByDr: req.body.checkedByDr,
    },
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
          // console.log(result);
          res.json({ status: "success", message: "saved successfully" });
       
      }
    }
  );
};

/* --------------------------- update Visit By Dr --------------------------- */

const updateVisitByDr = (req, res) => {
  Visit.findOneAndUpdate(
    { date: new Date().toDateString(),checkedByNurse: true, checkedByDr:false },
    {
      
      doctorId: req.body.doctorId,
      drTreatment: req.body.drTreatment,
      diagnose: req.body.diagnose,
      drNotes: req.body.drNotes,
      checkedByDr: req.body.checkedByDr,
    },
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
          // console.log(result);
          res.json({ status: "success", message: "saved successfully" });
       
      }
    }
  );
};


/* ----------------------------- get All Patient ---------------------------- */
const getAllPatients = (req, res) => {
  Patients.find({}, (err, result) => {
    res.json({ result: result });
  });
};

module.exports = {
  updateVisitByNurse,
  updateVisitByDr,
  getAllPatients,
  addVisit,
  AddNewPatient,
  searchPatient,
};
