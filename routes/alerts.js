const express = require('express');
const router = express.Router();
const verify = require('./verifyToken');
const Alerts = require('../models/Alerts');

router.get('/', async (req, res) => {
    try {
        const alert = await Alerts.find();
        res.json(alert);
    } catch (error) {
        res.json({message: error});
    }
});

router.get('/:alertId', async (req, res) => {
    const alert = await Alerts.findOne({_id: req.params.alertId});
    if (!alert) return res.status(400).send('alert doesnt exist!');
    else res.json(alert);
});

router.post('/', (req, res) => {
    //When recieved, gen a random ID, verify the users token is valid, timestamp, gen web addr, and push to DB
});

module.exports = router;