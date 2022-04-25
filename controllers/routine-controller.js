const express = require('express')
const req = require('express/lib/request')
const res = require('express/lib/response')
const router = express.Router()

const Routine = require('../models/routine-model')

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

router.put('/:id', (req,res)=>{
    const id = req.params.id
    Routine.findOneAndUpdate(
        {_id:id},
        {
            name: req.body.name, 
    dayToDo: req.body.dayToDo,
    muscleGroups: req.body.muscleGroups,
    completed:req.body.completed,
},
{new:true}
.then((routine)=>{
    res.render('routines/routine-index', routine)
})
.catch(console.error)
        
    )
    
})
    



module.exports= router