const router = require("express").Router()
const Message = require("../models/Message.model")
const User = require("../models/User.model")

//const mongoose = require("mongoose")

router.get('/allMessages',(req,res)=>{
    Message.find()
    .then(allMessages=>{
        res.json(allMessages)
    })
    .catch((err) => console.log(err))
})

router.get("/details/:id", (req, res) => {
    const { id } = req.params
    Message.findById(id)
        .then(details => {
            res.json(details)
        })
        .catch(console.log)
})

router.post('/create', (req, res) => {
    Message.create(req.body)
        .then(newMessage => {
            const { _id } = newMessage
            User.findByIdAndUpdate(req.body.userId, {
                $push: { message: _id }
            }, { new: true })
            .then(updatedUser => {
                console.log(updatedUser)
                res.json(updatedUser)
            })
    })
    .catch(console.log)
})

router.put("/edit/:id", (req, res) => {
    const { id } = req.params
    Message.findByIdAndUpdate(id, req.body, { new: true })
        .then(updatedMessage => {
            res.json(updatedMessage)
        })
        .catch(console.log)
})

router.delete("/delete/:id", (req, res) => {
    const { id } = req.params
    Message.findByIdAndRemove(id)
        .then(eliminado => {
            User.findByIdAndUpdate(req.body.userId, { $pull: { message : id } }, { new: true })
                .then(updatedUser => {
                    res.json(updatedUser)
                }).catch(console.log)
        })
        .catch(console.log)
})

module.exports = router