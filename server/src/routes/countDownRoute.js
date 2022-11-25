const express = require("express")
const {createCountDown,getCountDown} = require("../controllers/eventController")



const router = express.Router()

router.post("/",createCountDown)
router.get("/:eventName",getCountDown)

module.exports = router