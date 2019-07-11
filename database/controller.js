const User = require('./user.js');

const findUsers = (form, callback) => {
  User.find(
    {$and:[
    {times: {$in: form.times}},
    {workouts: {$in: form.workouts}},
    {gymKey: form.gymKey}
  ]},
  (err, result) => {
    if (err) {
      callback(err);
    }
    else {
      callback(null, result);
    } 
  })
}

module.exports = findUsers;