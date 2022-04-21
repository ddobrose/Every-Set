const { Schema } = require('../db/connection')
const mongoose = require('../db/connection')
const Routine = require('./routine-model')

const WorkoutSchema= new mongoose.Schema({
    name: String,
    muscleGroups:[String],
    sets:Number,
    repRangeLow: Number,
    repRangeHigh: Number,
    equipment:String,
    routineId:{
        type:Schema.Types.ObjectId,
        ref:"Routine"
    }
})

const Workout = mongoose.model('Workout', WorkoutSchema)

module.exports= Workout