const express = require('express');
const router = express.Router();
const verify = require('./verifyToken');
const Alerts = require('../models/Alerts');

router.post('/issuealert', async (req, res) => {
    const alert = new Alerts({
        sender: req.body.sender,
        sent: new Date,
        expire: req.body.expire,
        status: "issued",
        validity: true,
        event: req.body.event,
        headline: req.body.headline,
        desc: req.body.desc,
        web: req.body.web,
        image: req.body.image,
        locs: req.body.locs
    });

    try {
        const savedAlert = await alert.save();
        res.send({alert: alert._id});
    } catch (error) {
        res.status(400).send(error);
    }
});

//update an alert
router.patch('/updatealert/:alertId', async (req, res) => {
    try {
        const updatedAlert = await Alerts.updateOne({_id: req.params.alertId}, {$set: {
            sent: new Date,
            expire: req.body.expire,
            status: "updated",
            headline: req.body.headline,
            desc: req.body.desc,
            web: req.body.web,
            image: req.body.image,
            locs: req.body.locs
        }});
        res.json(updatedAlert);
    } catch (error) {
        res.json({message: err});
    }
});

//upgrade an alert
router.patch('/upgradealert/:alertId', async (req, res) => {
    try {
        const upgradedAlert = await Alerts.updateOne({_id: req.params.alertId}, {$set: {
            sent: new Date,
            expire: req.body.expire,
            status: "upgraded",
            headline: req.body.headline,
            desc: req.body.desc,
            web: req.body.web,
            image: req.body.image,
            locs: req.body.locs
        }});
        res.json(upgradedAlert);
    } catch (error) {
        res.json({message: err});
    }
});

//cancel an alert
router.patch('/cancelalert/:alertId', async (req, res) => {
    try {
        const canceledAlert = await Alerts.updateOne({_id: req.params.alertId}, {$set: {
            sent: new Date,
            expire: req.body.expire,
            status: "canceled",
            headline: req.body.headline,
            desc: req.body.desc,
            web: req.body.web,
            image: req.body.image,
            locs: req.body.locs
        }});
        res.json(canceledAlert);
    } catch (error) {
        res.json({message: err});
    }
});

//expire an alert
router.patch('/expirealert/:alertId', async (req, res) => {
    try {
        const expiredAlert = await Alerts.updateOne({_id: req.params.alertId}, {$set: {
            sent: new Date,
            expire: req.body.expire,
            status: "expired",
            headline: req.body.headline,
            desc: req.body.desc,
            web: req.body.web,
            image: req.body.image,
            locs: req.body.locs
        }});
        res.json(expiredAlert);
    } catch (error) {
        res.json({message: err});
    }
});

//delete an alert (THIS SHOULDNT HAVE TO BE USED, ALL ALERTS ARE ARCHIVED)
router.delete('/deletealert/:alertId', async (req, res) => {
    try {
        const removedAlert = await Alerts.deleteOne({_id: req.params.alertId});
        res.json(removedAlert);
    } catch (error) {
        res.json({message: err});
    }
});

module.exports = router;
