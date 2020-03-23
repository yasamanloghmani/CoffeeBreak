var express = require('express');
var router = express.Router();
const userCtrl = require('../controllers/api/users');
const groupctrl = require('../controllers/api/groups');


router.post('/users', userCtrl.create);

module.exports = router;
