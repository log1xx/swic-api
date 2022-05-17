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
    try {
        const alert = await Alerts.findOne({_id: req.params.alertId});
        res.json(alert);
    } catch (error) {
        res.status(400).send(error);
    }
});

router.get('/bySender/:alertId', async (req, res) => {
    try {
        const alert = await Alerts.find({sender: req.params.alertId});
        res.json(alert);
    } catch (error) {
        res.status(400).send(error);
    }
});

router.get('/byStatus/:alertId', async (req, res) => {
    try {
        const alert = await Alerts.find({status: req.params.alertId});
        res.json(alert);
    } catch (error) {
        res.status(400).send(error);
    }
});

router.get('/byValidity/:alertId', async (req, res) => {
    try {
        const alert = await Alerts.find({validity: req.params.alertId});
        res.json(alert);
    } catch (error) {
        res.status(400).send(error);
    }
});

router.get('/byEvent/:alertId', async (req, res) => {
    try {
        const alert = await Alerts.find({event: req.params.alertId});
        res.json(alert);
    } catch (error) {
        res.status(400).send(error);
    }
});

router.get('/byLocs/:alertId', async (req, res) => {
    try {
        const alert = await Alerts.find({locs: req.params.alertId});
        res.json(alert);
    } catch (error) {
        res.status(400).send(error);
    }
});

module.exports = router;
