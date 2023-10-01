const express = require('express');
const genNewUrl = require("../Controllers/url");
const router = express.Router();

router.post("/" , genNewUrl);

module.exports = router;