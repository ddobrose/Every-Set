require('dotenv').config()
const express = require('express')
const app = express()

app.get('/test', (req,res)=> {
    res.send('network is working')
})

//routine controller
app.route('/')
.get((req,res)=>{
    res.send('index of routines- includes view/edit/delete buttons by each routine, add routine button at bottom ')
})
.post((req,res)=>{
    res.send('Create new Routine- add name, date,muscle groups worked')
})

//workout controller
app.route('/:id/workouts')
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


//routine Controller
app.get('/edit/:id', (req,res)=>{
    res.send('edit routine by ID Form- includes forms to add or change muscle groups worked and change date to complete and name has submit button')
})

app.get('/new', (req,res)=>{
    res.send('Create a Routine Form- has all same info as edit')
})



//Workout Controller
app.route('/:id/workouts/:id')
.get((req,res)=>{
    res.send('form to view/edit workout in routine by id')
})
.put((req,res)=>{
    req.params.id
    res.send('edit workout by ID')
})
.delete((req,res)=>{
    res.send('delete a workout in routine by ID')
})


app.get('/:id/workouts/new', (req,res)=>{
    res.send('form to create workout same as edit a workout includes cancel and submit button')
})





const port = process.env.PORT || 3421

app.listen(port, () => {
    console.log(`Every Set app is running on ${port}`)
})