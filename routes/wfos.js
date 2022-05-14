const express = require('express');
const router = express.Router();
const verify = require('./verifyToken');

router.get('/', verify, (req, res) => {
    res.send(req.user);
});

router.get('/:wfo', (req, res) => {
    //grab and return wfo name, locs 
});

module.exports = router;
