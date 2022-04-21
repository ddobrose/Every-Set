const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const RoutineSchema = new Schema({
    name: String, 
    dateToDo: Date, 
    muscleGroups:[String], 
    completed:Boolean,
    workouts: [{type: Schema.Types.ObjectId, ref: 'Workout'}] 
})
    

    const Routine= mongoose.model('Routine', RoutineSchema)

    module.exports= Routine