require("dotenv").config();
const mongoose= require("mongoose")
const {User} = require("../../models/UserSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");



const getDataForLogIn = (req, res) => {
  User.findOne({ nationalid: req.body.nationalid }, async (err, result) => {
    if (result === null) {
      return res
        .status(400)
        .send("NationalId and Password you entered is Wrong !!!.");
    }
    try {
      if (await bcrypt.compare(req.body.password, result.password)) {
        const payload = {
          nationalid: result.nationalid,
          fullName: result.fullName,
          role: result.role,
          

        };
        const token = jwt.sign(payload, process.env.SECRET_KEY);
        res.json({ message: "user logged in", token: token });
      } else {
        res.json({ message: "data is incorrect" });
      }
    } catch (error) {
      res.status(500).send();
    }
  });
};

function getUserDataFromToken(req,res){
  const token = req.user
  res.json({token:token})

}

module.exports = {getDataForLogIn,getUserDataFromToken};

