/**
 * Created by Victor on 2015-05-10.
 */

var express = require('express');
var router = express.Router();

/* GET Marknad page. */
router.get('/', function(req, res, next) {
    res.render('marknad');
});

module.exports = router;