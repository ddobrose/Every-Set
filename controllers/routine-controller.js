const express = require('express')
const req = require('express/lib/request')
const res = require('express/lib/response')
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
        res.redirect('/routines')
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
    res.redirect('/routines')
})
.catch(console.error)
})
.delete((req,res)=>{
    const id = req.params.id
    Workout.deleteMany({_routineId:id})
   Routine.findOneAndRemove({_id:id})
   .then(()=>{
       res.redirect('/routines')
   })
   .catch(console.error)
})

router.route('/:id/workouts')
.get((req,res) =>{
    // Routine.find({_id:req.params.id}) // How do i declare this
    Workout.find({_routineId:req.params.id})//and this as separate variables in order to reference both in the view page
    .then((workouts)=>{
        res.render('workouts/view-routine-workouts',{workouts})
        console.log(workouts[0].routineId)//like this
        console.log(workouts[0].id)
})
})
.post((req,res)=>{
    res.send('create a new workout for said routine id ')
})



//routine Controller




//Workout Controller
router.route('/:id/workouts/:workoutid/edit')
.get((req,res)=>{
    res.send('form to view/edit workout in routine by id')
})



router.route('/:id/workouts/:workoutid')
.put((req,res)=>{
    res.send(`edit workout ${req.params.workoutid}`)
})
.delete((req,res)=>{
    res.send('delete a workout in routine by ID')
})


router.get('/:id/workouts/new', (req,res)=>{
    Routine.findById(req.params.id)
    .then((routine)=>{
    res.render('workouts/create-new-workout',routine)
    console.log(routine.name)
})
.catch(console.error)
})

    



module.exports= router