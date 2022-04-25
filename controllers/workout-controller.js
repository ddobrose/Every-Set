const express = require("express")
const req = require('express/lib/request')
const res = require('express/lib/response')
const router = express.Router()

const Workout = require('../models/workout-model')

router.route('/')
.get((req,res) =>{
    res.send('Do/View a routine id includes forms to log actual reps done on each set, includes edit routine button and add workout button and completed checkbox')
})
.post((req,res)=>{
    res.send('create a new workout for said routine id ')
})
.put((req,res)=>{
    res.send('edit the routine by ID')
})
.delete((req,res)=>{
    res.send('delete a routine by ID and all workouts associated')
})


module.exports= router