const mongoose = require('mongoose')
const Schema = mongoose.Schema
const UserSchema = new Schema({
    nationalid:{ type:String , required: true},
    fullName:{ type:String , required: true},
    password:{ type:String , required: true},
    role: { type:String , required: true}
})

const User= module.model('User', User)
module.exports= User;
