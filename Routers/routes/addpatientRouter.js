const express = require("express");
const addPatinetRouter = express.Router();

const {AddNewPatient, getAllPatients,updatePatient} = require("../controllers/addpatient ");
addPatinetRouter.put("/update",updatePatient)
addPatinetRouter.post("/add",AddNewPatient);
addPatinetRouter.get("/patients", getAllPatients);



module.exports={addPatinetRouter}