const router = require("express").Router();
const authRoutes = require("./auth.routes");
const allTrips = require('./trip.routes');
const allReviews = require('./review.routes');

/* GET home page */
router.get("/", (req, res, next) => {
  res.json("All good in here");
});


router.use("/auth", authRoutes);
router.use('/trips', allTrips);
router.use('/reviews', allReviews);

module.exports = router;
