const router = require("express").Router();
const authRoutes = require("./auth.routes");
const allTrips = require('./trip.routes');
const allpackages = require('./package.routes');
const allMessages = require('./message.routes');

/* GET home page */
router.get("/", (req, res, next) => {
  res.json("All good in here");
});


router.use("/auth", authRoutes);
router.use('/', allTrips);
router.use('/', allpackages);
router.use('/', allMessages);

module.exports = router;
