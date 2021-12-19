const mongoose = require('mongoose')
const Schema = mongoose.Schema
const UserSchema = new Schema({
    nationalid:{ type:String , required: true},
    fullName:{ type:String , required: true},
    password:{ type:String , required: true},
    role:  {type:mongoose.Schema.ObjectId, ref:"Roles"}
})

const User= mongoose.model('User', UserSchema)
module.exports= {User};
