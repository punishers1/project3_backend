const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose")


mongoose.connect("mongodb+srv://khb:1111@cluster0.8njwj.mongodb.net/test", (err,res)=>{
    console.log("connect to dataBase");
})












app.use(cors());

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server On ${PORT}`);
});
