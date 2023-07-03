const express = require("express");
const router = express.Router();
const getData = require('../controller/getData.controller')

router.get('/check',getData.getData)


module.exports = router