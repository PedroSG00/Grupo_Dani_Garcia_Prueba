const router = require("express").Router()
const { getFactAndGif } = require('../controller/fact-and-image.controller')

router.get("/", getFactAndGif)

module.exports = router
