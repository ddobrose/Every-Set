const mongoose = require('../db/connection')

const RoutineSchema = new mongoose.schema({ 
    name: String, 
    dateToDo: Date, 
    muscleGroups:[String], 
    completed:Boolean})

    const Routine= mongoose.model('Routine', RoutineSchema)

    module.exports= Routine