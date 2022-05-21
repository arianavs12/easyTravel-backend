const router = require("express").Router()
const Message = require("../models/Message.model")

//const mongoose = require("mongoose")

router.get('/reviews',(req,res)=>{
    Message.find()
    .then(allMessages=>{
        res.json(allMessages)
    })
    .catch((err) => console.log(err))
})

router.post('/reviews', (req, res) => {
    Message.create(req.body)
        .then(newMessage => {
            res.status(201).json(newMessage)
        })
        .catch((err) => console.log(err))
})


module.exports = router