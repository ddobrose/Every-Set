const Workout = require('../models/workout-model')
const workoutSeeds= require('./workout-seeds.json')

Workout.deleteMany({})
.then(()=>{
    return Workout.insertMany(workoutSeeds)
})
.then(console.log)
.catch(console.error)
.finally(()=> {
    process.exit()
})

