const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Users = require('../models/Users');

router.post('/login', async (req, res) => {
    //check to make sure user does exist
    const user = await Users.findOne({username: req.body.username});
    if (!user) return res.status(400).send('user doesnt exist!');

    //chech if password is correct
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) return res.status(400).send('invalid password');

    const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET);
    res.header('auth-token', token).send(token);
});

router.post('/logout', (req, res) => {
    //destroy token
});

router.post('/createuser', async (req, res) => {
    //check to make sure user doesnt exist yet
    const usernameExist = await Users.findOne({username: req.body.username});
    if (usernameExist) return res.status(400).send('user already exists!')

    //hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    
    //create new user
    const user = new Users({
        username: req.body.username,
        password: hashedPassword,
        wfo: req.body.wfo,
        acctype: req.body.acctype
    });
    try {
        const savedUser = await user.save();
        res.send({user: user._id});
    } catch (error) {
        res.status(400).send(error);
    }
});

module.exports = router;
