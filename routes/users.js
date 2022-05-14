const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('On /users');
});

router.get('/salt/:username', (req, res) => {
    //grab the salt and return for a given username
});

router.post('/login', (req, res) => {
    //check to verify pwhash, gen a token, store token in DB, and return token
});

router.post('/logout', (req, res) => {
    //destroy token
});

router.post('/createusersalt', (req, res) => {
    //create user with name and salt, return salt
});

router.post('/createuser', (req, res) => {
    //create user using name, store hash
});

module.exports = router;
