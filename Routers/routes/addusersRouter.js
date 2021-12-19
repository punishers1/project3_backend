const express = require("express");
const addusersRouter = express.Router();
// AddNewUser,
const {saveUser, getAllUsers, getAllPatients}= require("../controllers/addusers");

addusersRouter.post("/",saveUser );
addusersRouter.get("/", getAllUsers);
addusersRouter.get("/", getAllPatients);


module.exports={addusersRouter}