var express = require('express');
var router = express.Router();

router.use('/citycrew',require('./citycrew'));
router.use('/citycrew',require('./law'));
router.use('/citycrew',require('./admin'));
module.exports = router;
