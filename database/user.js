var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema ({
  firstName : String,
  lastName : String,
  username : String,
  email : String,
  photos : String,
  gymKey: String,
  gymName: String,
  gymLocation: String,
  times: [String],
  workouts: [String]
})

const User = mongoose.model('User', userSchema);

module.exports = User; 