const express = require('express');
const router = express.Router();
const controllers = require("../controllers/doctors")
const reviews = require("../controllers/reviews")
const {verifyTokenMiddleware, verifyUserMiddleware} = require("../middlewares/auth")


router.get("/name/:name", controllers.getDoctorsByNameController)
router.get("/", controllers.filterDoctorsController)
router.get("/:id", controllers.getDoctorByIDController)


router.delete("/:id",
    verifyTokenMiddleware, 
    verifyUserMiddleware,
    controllers.deleteDoctorController
)

router.post("/scrap", 
    verifyTokenMiddleware, 
    verifyUserMiddleware,
    controllers.scrapNewDoctorsController
)

router.get("/:id/reviews", 
    reviews.getDoctorReviewsController
)

module.exports = { doctorsRoutes: router }