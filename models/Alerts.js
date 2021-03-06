const mongoose = require('mongoose');

const AlertsSchema = mongoose.Schema({
    sender: {
        type: String,
        required: true
    },
    sent: {
        type: Date,
        required: true
    },
    expire: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    validity: {
        type: Boolean,
        required: true
    },
    event: {
        type: String,
        required: true
    },
    headline: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    web: {
        type: String,
        required: false
    },
    image: {
        type: String,
        required: false
    },
    locs: {
        type: Array,
        required: true
    }
})

module.exports = mongoose.model('Alerts', AlertsSchema);
