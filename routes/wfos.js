const express = require('express');
const router = express.Router();
const verify = require('./verifyToken');
const Wfos = require('../models/Wfos');

router.get('/', verify, async (req, res) => {
    try {
        const wfo = await Wfos.find();
        res.json(wfo);
    } catch (error) {
        res.json({message: error});
    }
});

router.get('/:wfoId', verify, async (req, res) => {
    const wfo = await Wfos.findOne({wfo: req.params.wfoId});
    if (!wfo) return res.status(400).send('wfo doesnt exist!');
    else res.json(wfo);
}); 

router.post('/createwfo', verify, async (req, res) => {
    const wfo = new Wfos({
        wfo: req.body.wfo,
        name: req.body.name,
        locs: req.body.locs
    });
    try {
        const savedWfo = await wfo.save();
        res.send(wfo);
    } catch (error) {
        res.status(400).send(error);
    }
});

//update a wfo
router.patch('/createwfo/:wfoId', verify, async (req, res) => {
    try {
        const updatedWfo = await Wfos.updateOne({_id: req.params.wfoId}, {$set: {wfo: req.body.wfo, name: req.body.name}});
        res.json(updatedWfo);
    } catch (error) {
        res.json({message: err});
    }
});

//delete a wfo
router.delete('/createwfo/:wfoId', verify, async (req, res) => {
    try {
        const removedWfo = await Wfos.deleteOne({_id: req.params.wfoId});
        res.json(removedWfo);
    } catch (error) {
        res.json({message: err});
    }
});

module.exports = router;
