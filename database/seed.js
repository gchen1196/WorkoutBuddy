const faker = require('faker');
const User = require('./user.js');
const data = require('./sample.js');
const db = require('./index.js');

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  const promise = [];

  const workoutOptions = ['chest', 'back', 'triceps', 'biceps', 'shoulders', 'legs', 'glutes', 'abs', 'cardio'];
  const timeOptions = ['earlyMorning', 'morning', 'lunch', 'afternoon', 'dinner', 'night', 'lateNight'];

  for (var i = 0; i < 600; i++) {
    
    const workouts = [];
    const times = [];
    const randomNumberWorkouts = Math.floor(Math.random() * 3) + 1;
    const randomNumberTime = Math.floor(Math.random() * 2) + 1;
    const workoutOptionsCopy = workoutOptions.slice();
    const timeOptionsCopy = timeOptions.slice();
    var n = 0;
    var workoutIndex = 9;
    while (n < randomNumberWorkouts) {
      const randomWorkoutIndex = Math.floor(Math.random() * workoutIndex);
      workouts.push(workoutOptionsCopy[randomWorkoutIndex]);
      workoutOptionsCopy.splice(randomWorkoutIndex, 1);
      workoutIndex--;
      n++;
    }

    var m = 0;
    var timeIndex = 6;
    while (m < randomNumberTime) {
      const randomTimeIndex = Math.floor(Math.random() * timeIndex);
      times.push(timeOptionsCopy[randomTimeIndex]);
      timeOptionsCopy.splice(randomTimeIndex, 1);
      timeIndex--;
      m++;
    }

    const randomNumber = Math.floor(Math.random()*20)

    const user = new User({
      firstName : faker.name.firstName(),
      lastName : faker.name.lastName(),
      username : faker.internet.userName(),
      email : faker.internet.email(),
      photos : faker.image.avatar(),
      gymKey: data.businesses[randomNumber].id,
      gymName: data.businesses[randomNumber].name,
      gymLocation: data.businesses[randomNumber].location.display_address.join(' '),
      workouts: workouts,
      times: times
    })
    promise.push(user.save());
  }
  Promise.all(promise)
  .then(() => {
    db.close();
    console.log('Connection closed');
  })
  .catch(err => console.log(err));
})


db.users.find(
  {$and:[
      {times: {$in:["night"]}},
      {workouts: {$in:["biceps"]}},
      {gymKey: "YvWwrrhb_gNY52Xm7yHMTg"}
  ]}
)


