const mongoose = require('mongoose');

const UsersSchema = mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    sender: {
        type: String,
        required: true
    },
    sent: {
        type: String,
        required: true
    },
    status: {
        type: String,
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
    area: {
        type: String,
        required: true
    },
    web: {
        type: String,
        required: true
    }
})