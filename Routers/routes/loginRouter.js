const express = require("express");
const logInRouter = express.Router();
// const { authenticateToken } = require("../../auth/userAuthenticate");
// getAllUsers,
//   changeHealthStatus,
//   changePassword,
const {
  getDataForLogIn,
  getAllUsers,
  saveUser,
} = require("../controllers/login");



logInRouter.post("/", getDataForLogIn)


module.exports = { logInRouter };
