require('dotenv').config()
const express = require('express');
const app = express()
const routineController = require('./controllers/routine-controller')
const methodOverride = require('method-override');

app.set('view engine', 'hbs');
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(methodOverride('_method'))
app.use('/', routineController)
app.use(express.static('public'))


app.get('/test', (req,res)=> {
    res.send('network is working')
})

// app.get('/favicon.ico', (req, res) => {res.send("dummy")})





const port = process.env.PORT || 3421

app.listen(port, () => {
    console.log(`Every Set app is running on ${port}`)
})