const express = require('express');
const router = express.Router();
const path = require('path')
const indexPage = require('../controllers/index_page');

router.get('/',indexPage);

module.exports = router;