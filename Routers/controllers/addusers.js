const {User} = require("../../models/UserSchema")
const Patients= require("../../models/PatientsSchema");
const Roles= require("../../models/RolesSchema")
const bcrypt = require("bcrypt");


/* ------------------------------ get all user ------------------------------ */

const getAllUsers = (req, res) => {
    // const token = req.user;
    User.find({}, (err, result) =>
      res.json({ result: result })
      
    );
  };

/* -------------------------------- new user -------------------------------- */
  async function saveUser(req,res){
    const newUser = new User({
  
      nationalid: req.body.nationalid,
      fullName:req.body.fullName,
      role: req.body.role,
      password: bcrypt.hashSync(req.body.password, 10),
    })
    try{
      await newUser.save();
       res.status(201).send(newUser);
      
    }
    catch(err){
      console.log(err.message);
    }
  }
/* ------------------------------- get patient ------------------------------ */
const getAllPatients= (req,res)=>{

    Patients.find({}, (err, result) =>
    res.json({ result: result })
  );
}

const getRoles= (req,res)=>{
  Roles.find({}, (err, result) =>
  res.json({ result: result })
  );
}

module.exports={saveUser,getAllUsers,getAllPatients,  getRoles
     }
    // AddNewUser