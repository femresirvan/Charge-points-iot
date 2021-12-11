const express = require('express');
const router = express.Router();
const path = require('path')
const indexPage = require('../controllers/index_page');
const contactPage = require('../controllers/contact_page');
const api = require('../controllers/api');

router.get('/',indexPage);
router.get('/contact',contactPage);
router.get('/api/points', api.getData);
module.exports = router;