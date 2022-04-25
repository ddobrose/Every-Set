// const express = require("express")
// const req = require('express/lib/request')
// const res = require('express/lib/response')
// const Routine = require("../models/routine-model")
// const router = express.Router()

// const Workout = require('../models/workout-model')

// //workout controller
// router.route('/')
// .get((req,res) =>{
//     // Routine.find({_id:req.params.id}) // How do i declare this
//     Workout.find({_routineId:req.params.id})//and this as separate variables in order to reference both in the view page
//     .then((workouts)=>{
//         res.render('workouts/view-routine-workouts',{workouts})//like this
// })
// })
// .post((req,res)=>{
//     res.send('create a new workout for said routine id ')
// })



// //routine Controller




// //Workout Controller
// router.route('/:workoutid/edit')
// .get((req,res)=>{
//     res.send('form to view/edit workout in routine by id')
// })
// .put((req,res)=>{
//     req.params.workoutid
//     res.send('edit workout by ID')
// })
// .delete((req,res)=>{
//     res.send('delete a workout in routine by ID')
// })


// router.get('/:id/workouts/new', (req,res)=>{
//     res.render('workouts/create-new-workout')
// })


// module.exports= router