const express = require("express");
const addPatinetRouter = express.Router();
// ,updatePatient,searchPatient
const {AddNewPatient, getAllPatients,searchPatient,addVisit,updateVisitByNurse,updateVisitByDr} = require("../controllers/addpatient ");
// addPatinetRouter.put("/update",updatePatient)
addPatinetRouter.post("/addPatient",AddNewPatient);
addPatinetRouter.get("/patients", getAllPatients);
addPatinetRouter.get("/patientupdate/:id",searchPatient)
addPatinetRouter.get("/addVisit/:id",addVisit)
addPatinetRouter.post("/addNursingDeptDetails",updateVisitByNurse)
addPatinetRouter.post("/addDcotringDeptDetails",updateVisitByDr)



module.exports={addPatinetRouter}