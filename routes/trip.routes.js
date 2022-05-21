const router = require("express").Router()
const Viaje = require("../models/Trip.model")

//const mongoose = require("mongoose")

router.get('/viajes',(req,res)=>{
    Viaje.find()
    .then(alltrips=>{
        console.log(alltrips)
        res.json(alltrips)
    })
    .catch((err) => console.log(err))
})

router.post('/viajes', (req, res) => {
    Viaje.create(req.body)
        .then(newTrip => {
            res.status(201).json(newTrip)
        })
        .catch((err) => console.log(err))
})


module.exports = router