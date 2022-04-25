const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const RoutineSchema = new Schema({
    name: {type: String, required:true}, 
    dayToDo: String, 
    muscleGroups:[String], 
    completed:{type:Boolean, default:false},
    workouts: [{type: Schema.Types.ObjectId, ref: 'Workout'}] 
},
{timestamps:true}
)

    

    const Routine= mongoose.model('Routine', RoutineSchema)

    module.exports= Routine