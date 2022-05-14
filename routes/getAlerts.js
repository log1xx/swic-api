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

router.get('/bySender/:alertId', async (req, res) => {
    const alert = await Alerts.findOne({sender: req.params.alertId});
    if (!alert) return res.status(400).send('No alerts with that sender!');
    else res.json(alert);
});

router.get('/byStatus/:alertId', async (req, res) => {
    const alert = await Alerts.findOne({status: req.params.alertId});
    if (!alert) return res.status(400).send('No alerts with that status!');
    else res.json(alert);
});

router.get('/byValidity/:alertId', async (req, res) => {
    const alert = await Alerts.findOne({validity: req.params.alertId});
    if (!alert) return res.status(400).send('No alerts with that validity!');
    else res.json(alert);
});

router.get('/byEvent/:alertId', async (req, res) => {
    const alert = await Alerts.findOne({event: req.params.alertId});
    if (!alert) return res.status(400).send('No alerts with that event!');
    else res.json(alert);
});

router.get('/byLocs/:alertId', async (req, res) => {
    const alert = await Alerts.findOne({locs: req.params.alertId});
    if (!alert) return res.status(400).send('No alerts with that location!');
    else res.json(alert);
});

module.exports = router;
