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



// app.use("/",addPatinetRouter);



app.use('/logIn',logInRouter)




/// admin
 app.use("/", addusersRouter);
app.use("/", addusersRouter);
app.use("/", addusersRouter);

/// Res
app.use("/Res", addPatinetRouter);
// app.use("/addPatient", addPatinetRouter);




const PORT = process.env.PORT || 5000;  

app.listen(PORT, () => {
  console.log(`Server On ${PORT}`);
});
