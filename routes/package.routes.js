const router = require('express').Router();
const Package = require ('../models/Package.model');

router.get('/packages',(req,res)=>{
    Package.find()
    .then(allpackages=>{
        console.log(allpackages)
        res.json(allpackages)
    })
    .catch((err) => console.log(err))
})

router.post('/packages', (req, res) => {
    Package.create(req.body)
        .then(newPackage => {
            res.status(201).json(newPackage)
        })
        .catch((err) => console.log(err))
})


module.exports = router