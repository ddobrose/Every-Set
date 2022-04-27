const express = require('express');
require('dotenv').config()
const app = express()
const routineController = require('./controllers/routine-controller')
// const workoutController = require('./controllers/workout-controller')
const methodOverride = require('method-override');

app.set('view engine', 'hbs');
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(methodOverride('_method'))
app.use('/', routineController)
// app.use('/routines/:id/workouts', workoutController)

app.get('/test', (req,res)=> {
    res.send('network is working')
})

//routine controller


//workout controller
// app.route('/:id/workouts')
// .get((req,res) =>{
//     res.send('Do/View a routine id includes forms to log actual reps done on each set, includes edit routine button and add workout button and completed checkbox')
// })
// .post((req,res)=>{
//     res.send('create a new workout for said routine id ')
// })
// .put((req,res)=>{
//     res.send('edit the routine by ID')
// })
// .delete((req,res)=>{
//     res.send('delete a routine by ID and all workouts associated')
// })


//routine Controller




//Workout Controller
// app.route('/:id/workouts/:id')
// .get((req,res)=>{
//     res.send('form to view/edit workout in routine by id')
// })
// .put((req,res)=>{
//     req.params.id
//     res.send('edit workout by ID')
// })
// .delete((req,res)=>{
//     res.send('delete a workout in routine by ID')
// })


// app.get('/:id/workouts/new', (req,res)=>{
//     res.send('form to create workout same as edit a workout includes cancel and submit button')
// })





const port = process.env.PORT || 3421

app.listen(port, () => {
    console.log(`Every Set app is running on ${port}`)
})