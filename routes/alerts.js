const express = require('express');
const router = express.Router();
const verify = require('./verifyToken');

router.get('/', (req, res) => {
    res.send('On /alerts');
});

router.post('/', (req, res) => {
    //When recieved, gen a random ID, verify the users token is valid, timestamp, gen web addr, and push to DB
});

module.exports = router;