const express = require('express')
const req = require('express/lib/request')
const res = require('express/lib/response')
const async = require('hbs/lib/async')
const router = express.Router()

const Routine = require('../models/routine-model')
const Workout = require('../models/workout-model')

router.route('/')
.get((req,res)=>{
    Routine.find({})
    .then(routines=>res.render('routines/routine-index',{routines}))
})
.post((req,res)=>{
    Routine.create(req.body)
    .then((routine)=>{
        res.redirect('/')
    })
    .catch(console.error)
})


router.get('/:id/edit', (req,res) => {
        Routine.findById(req.params.id)
          .then((routine) => {
            res.render('routines/routine-edit-form', routine);
          })
          .catch(console.error);
      });


router.get('/new', (req,res)=>{
    res.render('routines/routine-create-form')
})

router.route("/:id")
.put((req,res)=>{
    const id = req.params.id
    Routine.findOneAndUpdate(
        {_id:id},
        {
            name: req.body.name, 
    dayToDo: req.body.dayToDo,
    muscleGroups: req.body.muscleGroups,
    completed:req.body.completed === "on",
},
{new:true}
    )
.then(()=>{
    res.redirect('/')
})
.catch(console.error)
})
.delete((req,res)=>{
    const id = req.params.id
    Workout.deleteMany({routineId:id})
    .then(()=>{
        return Routine.findOneAndRemove({_id:id})
    })
   .then(()=>{
       res.redirect('/')
   })
   .catch(console.error)
})


//working
router.route('/:id/workouts')
.get(async(req,res) =>{
    const id = req.params.id
    
    let routine = await Routine.find({_id:id})
    let workouts = await Workout.find({routineId:id})
    let context = { 
        routine: routine,
        workouts: workouts
    }
    
        res.render('workouts/view-routine-workouts',context)
        console.log(id)//like this
        console.log(context)
        // console.log(routine)

})
.post((req,res)=>{
    Workout.create(req.body)
    .then((workout)=>{
        res.redirect(`/${workout.routineId}/workouts`)
    })
    .catch(console.error)
})



//routine Controller




//Workout Controller
router.route('/:id/workouts/:workoutid/edit')
.get((req,res)=>{
    const id = req.params.workoutid
    Workout.findOne({_id:id})
    .then((workout)=>{
        res.render('workouts/edit-view-workout',workout)
        console.log(workout)
    })
})


//not working
router.route('/:id/workouts/:workoutid')
.put((req,res)=>{
    Workout.findOneAndUpdate(
        {_id:req.params.workoutid},
        {
            name: req.body.name, 
    sets: req.body.sets,
    repRangeLow: req.body.repRangeLow,
    repRangeHigh: req.body.repRangeHigh,
    equipment: req.body.equipment,
    muscleGroups: req.body.muscleGroups,
    
},
{new:true})
.then(res.redirect(`/${req.params.id}/workouts`))
})
.delete((req,res)=>{
    const id = req.params.workoutid
    Workout.findOneAndRemove({_id:id})
    .then(()=>{
        res.redirect(`/${req.params.id}/workouts`)
})
})

//working
router.get('/:id/workouts/new', (req,res)=>{
    Routine.findById(req.params.id)
    .then((routine)=>{
    res.render('workouts/create-new-workout',routine)
    console.log(routine.id)
})
.catch(console.error)
})

    



module.exports= router