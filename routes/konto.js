/**
 * Created by Victor on 2015-05-11.
 */

var express = require('express');
var router = express.Router();

/* GET Konto page. */
router.get('/', function(req, res, next) {
    res.render('konto');
});

module.exports = router;