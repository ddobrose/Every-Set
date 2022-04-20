const mongoose = require('../db/connection')

const WorkoutSchema= new mongoose.Schema({
    name: String,
    muscleGroups:[String],
    sets:Number,
    repRangeLow: Number,
    repRangeHigh: Number,
    equipment:String
})

const Workout = mongoose.model('Workout', WorkoutSchema)

module.exports= Workout