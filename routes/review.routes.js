const router = require("express").Router()
const Review = require("../models/Review.model")
const User = require("../models/User.model")

router.get('/allreviews',(req,res)=>{
    Review.find()
    .then(allReviews=>{
        res.json({reviews: allReviews})
    })
    .catch((err) => console.log(err))
})

router.get("/details/:id", (req, res) => {
    const { id } = req.params
    Review.findById(id)
        .then(details => {
            res.json(details)
        })
        .catch(console.log)
})

router.post('/create', (req, res) => {
    console.log('los datos a guardar son', req.body)
    Review.create(req.body)
        .then(newMessage => {
            const { _id } = newMessage
            User.findByIdAndUpdate(req.body.userId, {
                $push: { review: _id }
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
    Review.findByIdAndUpdate(id, req.body, { new: true })
        .then(updatedMessage => {
            res.json(updatedMessage)
        })
        .catch(console.log)
})

router.delete("/delete/:id", (req, res) => {
    const { id } = req.params
    Review.findByIdAndRemove(id)
        .then(eliminado => {
            User.findByIdAndUpdate(req.body.userId, { $pull: { message : id } }, { new: true })
                .then(updatedUser => {
                    res.json(updatedUser)
                }).catch(console.log)
        })
        .catch(console.log)
})

module.exports = router