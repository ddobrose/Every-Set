const Routine = require('../models/routine-model')
const routineSeeds= require('./routine-seeds.json')

Routine.deleteMany({})
.then(()=>{
    return Routine.insertMany(routineSeeds)
})
.then(console.log)
.catch(console.error)
.finally(()=> {
    process.exit()
})
