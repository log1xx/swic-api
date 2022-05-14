const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('On /alerts');
});

router.post('/', (req, res) => {
    //When recieved, gen a random ID, verify the users token is valid, timestamp, gen web addr, and push to DB
});

module.exports = router;