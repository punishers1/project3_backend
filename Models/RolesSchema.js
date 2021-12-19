const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RolesSchema = new Schema({
  title:String 
});

const Roles = mongoose.model('Roles', RolesSchema);
module.exports = Roles;