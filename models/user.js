import mongoose from 'mongoose'
var Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  school: { type: String },
  address: { type: String },
  createdTime: { type: Date, default: Date.now() }
});

var User = mongoose.model('User', UserSchema);

module.exports = User;