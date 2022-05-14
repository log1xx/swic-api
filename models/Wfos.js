const mongoose = require('mongoose');

const WfosSchema = mongoose.Schema({
    wfo: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    locs: {
        type: Array,
        required: true
    }
});

module.exports = mongoose.model('Wfos', WfosSchema);
