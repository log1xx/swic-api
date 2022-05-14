const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('On /wfos');
});

router.get('/:wfo', (req, res) => {
    //grab and return wfo name, locs 
});

module.exports = router;