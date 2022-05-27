const router = require("express").Router()
const Trip = require("../models/Trip.model")
const User = require("../models/User.model")

router.get('/alltrips',(req,res)=>{
    Trip.find()
    .then(allTrips=>{
        res.json(allTrips)
    })
    .catch((err) => console.log(err))
})

router.get("/details/:id", (req, res) => {
    const { id } = req.params
    Trip.findById(id)
        .then(details => {
            res.json(details)
        })
        .catch(console.log)
})

router.post('/create',(req,res)=>{
    console.log('los datos a guardar son', req.body)

    Trip.create(req.body)
    .then(newTrip => {
    
        return res.json(newTrip)
    })
    .catch(console.log)
    
})

router.put("/edit/:id", (req, res) => {
    const { id } = req.params
    Trip.findByIdAndUpdate(id, req.body, { new: true })
        .then(updatedTrip => {
            res.json(updatedTrip)
        })
        .catch(console.log)
})

router.delete("/delete/:id", (req, res) => {
    const { id } = req.params
    Trip.findByIdAndRemove(id)
        .then(eliminado => {
            User.findByIdAndUpdate(req.body.userId, { $pull: { message : id } }, { new: true })
                .then(updatedUser => {
                    res.json(updatedUser)
                }).catch(console.log)
        })
        .catch(console.log)
})

module.exports = router