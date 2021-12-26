const express = require("express");
const addusersRouter = express.Router();
// AddNewUser,
const {saveUser, getAllUsers, getAllPatients, getRoles}= require("../controllers/addusers");

addusersRouter.post("/add",saveUser );
addusersRouter.get("/", getAllUsers);
addusersRouter.get("/", getAllPatients);
addusersRouter.get("/roles", getRoles);

module.exports={addusersRouter}