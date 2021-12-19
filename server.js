const express = require("express");
const cors = require("cors");
const app = express();

const mongoose = require("mongoose")
const { logInRouter } = require("./Routers/routes/loginRouter");
const {addusersRouter}= require("./Routers/routes/addusersRouter");
const {addPatinetRouter}= require("./Routers/routes/addpatientRouter")
// const User= require("./Models/UserSchema")
// const Roles = require("./Models/RolesSchema")

mongoose.connect("mongodb+srv://khb:1111@cluster0.8njwj.mongodb.net/test", (err,res)=>{
    console.log("connect to dataBase");
})
app.use(express.json());
app.use(cors());



app.use("/",addPatinetRouter);



app.use('/user',logInRouter)




/// admin
 app.use("/add", addusersRouter);
app.use("/users", addusersRouter);
app.use("/Patients", addusersRouter);

/// Res
app.use("/Patient", addPatinetRouter);
app.use("/addPatient", addPatinetRouter);




const PORT = process.env.PORT || 5000;  

app.listen(PORT, () => {
  console.log(`Server On ${PORT}`);
});
