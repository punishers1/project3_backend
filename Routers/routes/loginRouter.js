const express = require("express");
const logInRouter = express.Router();

 const { authenticateToken } = require("../../auth/userAuthenticate");
// getAllUsers,
//   changeHealthStatus,
//   changePassword,
const {
  getDataForLogIn,
  getUserDataFromToken,

} = require("../controllers/login");



logInRouter.post("/", getDataForLogIn)
logInRouter.get("/",authenticateToken, getUserDataFromToken)


module.exports = { logInRouter };
