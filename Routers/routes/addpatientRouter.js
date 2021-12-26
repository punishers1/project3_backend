const express = require("express");
const addPatinetRouter = express.Router();
// ,updatePatient,searchPatient
const {AddNewPatient, getAllPatients,searchPatient,addVisit,getAllVisits,updatePatientByDate,getAllVisitsforDr,updatePatientByDateFromDr} = require("../controllers/addpatient ");
// addPatinetRouter.put("/update",updatePatient)
addPatinetRouter.post("/addPatient",AddNewPatient);
addPatinetRouter.get("/patients", getAllPatients);
addPatinetRouter.get("/Searchupdate/:id",searchPatient)
addPatinetRouter.get("/addVisit/:id",addVisit)
addPatinetRouter.get("/Visits", getAllVisits)
addPatinetRouter.put("/addNursingDeptDetails/:id", updatePatientByDate)
addPatinetRouter.put("/addDcotringDeptDetails/:id",updatePatientByDateFromDr)
addPatinetRouter.get("/VisitForDoctor",getAllVisitsforDr)



module.exports={addPatinetRouter}